import React from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Contact from './Contact';

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <>
      <Hidden smDown>
        <Box
          position="absolute"
          right="40px"
          top="35%"
          zIndex={1000}
          fontSize="30px"
        >
          <Contact />
        </Box>
      </Hidden>
      <Grid container spacing={4}>
        <Grid item container xs={12} md={6} alignItems={'center'}>
          <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
            <Box marginBottom={2}>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                Bc. Veronika Chovanečková
                <br />
              </Typography>
              <Typography
                variant="h1"
                fontWeight={700}
                color={'primary'}
                component={'span'}
                sx={{
                  background: `linear-gradient(180deg, transparent 82%, ${alpha(
                    theme.palette.secondary.main,
                    0.3,
                  )} 0%)`,
                }}
              >
                Celostní terapie
              </Typography>
            </Box>
            <Box marginBottom={3}>
              <Typography variant="h6" component="p" color="text.secondary">
                Celostní hlubinné terapie.
                <br />
                <br />
                Měření diagnosticko-terapeutickým přístrojem a následná
                harmonizace pomocí frekvencí a biorezonanční terapie.
                <br />
                <br />
                Komplexní přístup, který podporuje vaši schopnost se léčit a
                růst.
              </Typography>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                fullWidth={isMd ? false : true}
                onClick={() => {
                  navigate('/konzultace');
                }}
              >
                Konzultace
              </Button>
              <Box
                component={Button}
                variant={'outlined'}
                color="primary"
                size="large"
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
                fullWidth={isMd ? false : true}
                onClick={() => {
                  location.href = 'https://veronikafraitova.teachable.com/';
                }}
                endIcon={
                  <Box
                    component={'svg'}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    width={24}
                    height={24}
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </Box>
                }
              >
                Nové kurzy
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          xs={12}
          md={6}
          sx={{ '& img': { WebkitBorderRadius: '50px' } }}
        >
          <StaticImage
            src="../../../../images/me.jpeg"
            alt="me"
            style={{
              boxShadow: '19px 20px 0px 0 rgb(140 152 164 / 13%)',
              borderRadius: '50px',
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
