import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { colors } from '@mui/material';

const MeditaceNaMiru = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={2}>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700 }}
            >
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}
                sx={{
                  background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Meditace na "míru"{' '}
              </Typography>
              novinka
            </Typography>
          </Box>
          <Box marginBottom={3}>
            <Typography variant="h6" component="p" color="text.secondary">
              Nahraji Vám meditaci přímo na Váš problém
            </Typography>
            <Typography
              variant="h3"
              color="text.primary"
              sx={{ fontWeight: 700, color: colors.red[400] }}
            >
              800 Kč
            </Typography>
            <Box
              component={Button}
              variant="contained"
              color="primary"
              size="large"
              height={54}
              marginTop={2}
            >
              Chci se dozvědět více
            </Box>
          </Box>
          <Box
            paddingX={2}
            paddingY={1}
            bgcolor={'alternate.dark'}
            borderRadius={2}
          >
            <Typography variant="body1" component="p">
              2x meditace, 1 x 20min, 1 x 10min
            </Typography>
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
      >
        <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          src={'https://assets.maccarianagency.com/backgrounds/img34.png'}
          alt="..."
          effect="blur"
          maxWidth={600}
        />
      </Grid>
    </Grid>
  );
};

export default MeditaceNaMiru;
