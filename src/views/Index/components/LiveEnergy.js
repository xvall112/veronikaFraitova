/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const mock = [
  {
    title: 'Životní',
    titleColor: 'Energie',
    text:
      ' My, i vše okolo nás má svou energii. Vesmír, země, rostliny, zvířata, my sami… Naše tělo i každý náš orgán má svou energii, která vibruje na určité frekvenci a rezonuje s okolním světem.',
  },
  {
    title: 'Síla',
    titleColor: 'přesvědčení',
    text:
      ' Pokud chceme ve svém životě něco tvořit, je potřeba o tom být vnitřně přesvědčen bez jakýchkoli pochybností. Síla našeho přesvědčení vychází z našeho srdce.',
  },
  {
    title: 'Naše',
    titleColor: 'programy',
    text:
      'Naše podvědomé programy můžeme vědomě měnit a přepisovat tak, aby nám byly k prospěchu. Nechat si jen ty, které nám vyhovují a nijak nás neomezují.',
  },
  {
    title: 'Meditace',
    titleColor: 'programy',
    text:
      'Meditace je cesta k nalezení vnitřní harmonie, sebepoznání a rozšiřování vědomí. Při meditaci se tlukot srdce a dech velmi zpomalí. Dostanete se do hlubokého klidu a ucítíte bezpodmínečnou lásku.',
  },
];
const Teaser = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid
          item
          container
          alignItems={'center'}
          xs={12}
          md={6}
          marginBottom={'30vw'}
        >
          {mock.map((item, index) => {
            return (
              <Grid
                item
                container
                alignItems={'center'}
                xs={12}
                data-aos={isMd ? 'fade-right' : 'fade-up'}
                key={index}
              >
                <Box marginTop={'40vw'}>
                  <Typography
                    sx={{
                      textTransform: 'uppercase',
                      fontWeight: 'medium',
                    }}
                    gutterBottom
                    color={'secondary'}
                  >
                    Flexible options
                  </Typography>
                  <Typography
                    variant={'h4'}
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}{' '}
                    <Typography
                      color="primary"
                      variant="inherit"
                      component="span"
                    >
                      {item.titleColor}
                    </Typography>
                  </Typography>
                  <Typography
                    variant={'h6'}
                    component={'p'}
                    color={'text.secondary'}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="flex-start"
          xs={12}
          md={6}
        >
          <Box
            maxWidth={490}
            width={1}
            sx={{ position: 'sticky', top: '20vh' }}
          >
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration5.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Teaser;
