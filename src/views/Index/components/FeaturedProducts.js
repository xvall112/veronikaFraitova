/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FeaturedProducts = () => {
  return (
    <Box position={'relative'}>
      <Grid container>
        <Grid item xs={12} sm={6} data-aos={'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="text.primary"
              sx={{ fontWeight: 700, color: '#222B45' }}
            >
              Novinka
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography
              variant="h6"
              component="p"
              color="text.primary"
              sx={{ color: '#222B45' }}
            >
              Připravila jsem pro tebe užasné nové online kurzy Probuzení
              ženství, Sebeláska a Atraktivní zářivá žena. Uvnitř kurzu tě čeká
              spoustu zajímavých informací, meditací, aktivních meditací,
              cvičení, tanec...
            </Typography>
          </Box>
          <Box
            component={Button}
            variant="contained"
            color="primary"
            size="large"
            height={54}
          >
            Chci vědět více
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          maxWidth: 500,
          height: 'auto',
          position: 'absolute',
          bottom: '-160px',
          right: 0,
          display: { xs: 'none', sm: 'block' },
        }}
      >
        <StaticImage
          src="../../../images/probuzeniZenstvi2.png"
          alt="kurz probuzeni zenstvi"
          style={{
            height: '100%',
          }}
        />
      </Box>
    </Box>
  );
};

export default FeaturedProducts;
