import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeModeToggler from 'components/ThemeModeToggler';

const mock = [
  { title: 'Home', link: '/' },
  { title: 'Konzultace', link: '/konzultace' },
  { title: 'Workshopy', link: '/workshopy' },
  { title: 'Meditace', link: '/meditace' },
  { title: 'Kurzy', link: '/kurzy' },
  { title: 'Blog', link: '/blog' },
];
const Topbar = ({ onSidebarOpen }) => {
  const theme = useTheme();

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        alignItems={'center'}
        component={Link}
        href="/"
        title="theFront"
        width={{ xs: 100, md: 320 }}
        sx={{
          textDecoration: 'none !important',
          color: theme.palette.text.primary,
        }}
      >
        <StaticImage
          src="../../../../images/logo.png"
          alt="Logo"
          placeholder="blurred"
          layout="fixed"
          height={40}
        />
        <Typography variant={'body1'} marginLeft={1}>
          OpenYourEyes
        </Typography>
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {mock.map((item, index) => {
          return (
            <Box
              key={index}
              paddingX={2}
              display={'flex'}
              alignItems={'center'}
              transition={'1s'}
            >
              <Box
                component={Link}
                color={'text.primary'}
                partiallyActive={item.link === '/' ? false : true}
                activeStyle={{
                  color: theme.palette.primary.main,
                  fontWeight: '700',
                  transform: 'translate(0px,-2px)',
                }}
                to={item.link}
                fontWeight={400}
                sx={{ textDecoration: 'none !important' }}
              >
                <Typography>{item.title}</Typography>
              </Box>
            </Box>
          );
        })}

        <Box marginLeft={4}>
          <Button
            variant="contained"
            color="primary"
            component="a"
            target="blank"
            href="https://mui.com/store/items/the-front-landing-page/"
            size="large"
          >
            Kontakt
          </Button>
        </Box>
        <Box>
          <ThemeModeToggler />
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
