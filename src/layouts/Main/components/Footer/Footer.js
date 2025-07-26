import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import Newsletter from './Newsletter';

const Footer = () => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Newsletter />
      </Grid>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component={Link}
            to="/"
            title="Veronika Fraitová | OpenYourEyes"
            alignItems={'center'}
            color={theme.palette.text.primary}
          >
            <StaticImage
              src="../../../../images/logo.png"
              alt="logo"
              height={50}
              width={50}
              placeholder="blurred"
              layout="constrained"
            />
            <Typography pl={1}>Veronika Chovanečková | Celostní terapie</Typography>
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box
              component={Link}
              to="/obchodniPodminky"
              color={theme.palette.text.secondary}
            >
              Obchodní podmínky
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; Celostní terapie. 2025, All rights reserved
        </Typography>
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          {/*  When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes. */}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
