import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeModeToggler from 'components/ThemeModeToggler';
import { navigation, offers } from '../../../../data/data';
import KontaktDialog from '../KontaktDialog';
import Link from '@mui/material/Link';
import NavItem from './components/NavItem/NavItem';

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
        component={GatsbyLink}
        to="/"
        title="Veronika Fraitova"
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
          Veronika Fraitová
        </Typography>
      </Box>
      <Box
        sx={{ display: { xs: 'none', md: 'flex' } }}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        {navigation.map((item) => {
          return (
            <>
              {item.link ? (
                <Box
                  marginLeft={4}
                  key={item.link}
                  component={GatsbyLink}
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
              ) : (
                <Box marginLeft={4} key={item.title}>
                  <NavItem
                    title={item.title}
                    id={'offers-pages'}
                    items={item.items}
                  />
                </Box>
              )}
            </>
          );
        })}
        <Box
          paddingX={2}
          display={'flex'}
          alignItems={'center'}
          transition={'1s'}
        >
          <Box
            component={Link}
            color={'text.primary'}
            href="https://veronikafraitova.teachable.com/"
            fontWeight={400}
            sx={{ textDecoration: 'none !important' }}
          >
            <Stack direction="row" spacing={1}>
              <Typography>On-line kurzy</Typography>
              {/* <Box
                padding={0.5}
                display={'inline-flex'}
                borderRadius={1}
                bgcolor={'primary.main'}
                marginLeft={2}
              >
                <Typography sx={{ color: 'common.white', lineHeight: 1 }}>
                  novinka
                </Typography>
              </Box> */}
            </Stack>
          </Box>
        </Box>

        {/* <Box pl={1}>
          <ThemeModeToggler />
        </Box> */}
      </Box>
      <Box marginLeft={4}>
        <KontaktDialog />
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
