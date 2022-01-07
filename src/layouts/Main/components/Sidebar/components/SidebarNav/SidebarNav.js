import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { navigation } from '../../../../../../data/data';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import KontaktDialog from '../../../KontaktDialog';
import Link from '@mui/material/Link';
const SidebarNav = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box width={1} paddingX={2} paddingY={1}>
        <Box
          display={'flex'}
          component={Link}
          to="/"
          title="theFront"
          width={{ xs: 100, md: 120 }}
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
            <Typography variant="h5">Kurzy</Typography>
          </Box>
        </Box>
        <Divider />
        <Box marginTop={1}>
          <KontaktDialog />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarNav;
