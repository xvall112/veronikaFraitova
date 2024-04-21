import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { navigation } from '../../../../../../data/data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KontaktDialog from '../../../KontaktDialog';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import NavItem from './components/NavItem/NavItem';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { contact } from '../../../../../../data/data';

const SidebarNav = () => {
  const theme = useTheme();

  return (
    <>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component={Link}
          to="/"
          title="theFront"
          width={1}
        >
          <StaticImage
            src="../../../../../../images/logo.png"
            alt="logo"
            height={50}
          />
        </Box>
      </Box>
      <Box paddingX={2} paddingY={2}>
        {navigation.map((item, i) => {
          return (
            <div key={i}>
              {item.link ? (
                <Box marginY={2}>
                  <Box
                    component={GatsbyLink}
                    color={'text.primary'}
                    partiallyActive={item.link === '/' ? false : true}
                    activeStyle={{
                      color: theme.palette.primary.main,
                      fontWeight: '700',
                    }}
                    to={item.link}
                    sx={{ textDecoration: 'none !important' }}
                  >
                    <Typography variant="h5">{item.title}</Typography>
                  </Box>
                </Box>
              ) : (
                <Box key={item.title}>
                  <NavItem
                    title={item.title}
                    id={'offers-pages'}
                    items={item.items}
                  />
                </Box>
              )}
              <Divider />
            </div>
          );
        })}
        <Box marginY={2}>
          <Box
            component={Link}
            color={'text.primary'}
            href="https://veronikafraitova.teachable.com/"
            sx={{ textDecoration: 'none !important' }}
          >
            <Stack direction="row" spacing={1}>
              <Typography variant="h5">On-line kurzy</Typography>
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
        <Divider />
        <Box marginTop={1}>
          <KontaktDialog />
        </Box>
      </Box>
      <Grid container direction="row" justify="space-evenly">
        <Grid item>
          <a href={contact.instagram}>
            <IconButton aria-label="instagram" color="primary">
              <InstagramIcon fontSize="large" />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={contact.facebook}>
            <IconButton aria-label="facebook" color="primary">
              <FacebookIcon fontSize="large" />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={contact.youtube}>
            <IconButton aria-label="facebook" color="primary">
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={`mailto:${contact.email}`}>
            <IconButton aria-label="email" color="primary">
              <EmailOutlinedIcon fontSize="large" />
            </IconButton>
          </a>
        </Grid>
        <Grid item>
          <a href={`tel:${contact.mobil}`}>
            <IconButton aria-label="phone" color="primary">
              <PhoneOutlinedIcon fontSize="large" />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default SidebarNav;
