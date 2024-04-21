import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import SignInEventsForm from '../../../components/SignInEventsForm';

import Container from 'components/Container';

const mock = [
  {
    title: 'Access Bars',
    price: '1000',
    features: [
      {
        title: '1 x 60 min',
        isIncluded: true,
      },
      {
        title: 'Techniky Access Bars',
        isIncluded: true,
      },
      {
        title: 'Osobně',
        isIncluded: true,
      },
    ],
    isHighlighted: false,
    btnText: 'Objednat se',
  },
  {
    title: 'Access Bars +',
    price: '1500',
    features: [
      {
        title: '1 x 90 min',
        isIncluded: true,
      },
      {
        title: 'Techniky Access Bars',
        isIncluded: true,
      },
      {
        title: '+ řešení konkrétní oblasti vašeho života',
        isIncluded: true,
      },
      {
        title: 'Osobně',
        isIncluded: true,
      },
    ],
    isHighlighted: true,
    btnText: 'Objednat se',
  },
];

const Price = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Container maxWidth={800}>
      <Grid container spacing={isMd ? 0 : 2}>
        {mock.map((item, i) => (
          <Grid item container alignItems={'center'} xs={12} md={6} key={i}>
            <Box
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              border={0}
              paddingY={item.isHighlighted && isMd ? 8 : 2}
              width={'100%'}
            >
              <CardContent>
                <Box
                  marginBottom={4}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}
                >
                  <Typography variant={'h6'} gutterBottom>
                    <Box component={'span'} fontWeight={600}>
                      {item.title}
                    </Box>
                  </Typography>
                  <Box display={'flex'} alignItems={'flex-start'}>
                    <Typography variant={'h2'} color={'secondary'} gutterBottom>
                      <Box
                        component={'span'}
                        fontWeight={600}
                        marginRight={1 / 2}
                      >
                        {item.price}
                      </Box>
                    </Typography>
                    <Typography variant={'h4'} color={'secondary'}>
                      <Box component={'span'} fontWeight={600}>
                        Kč
                      </Box>
                    </Typography>
                  </Box>
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    1 klient
                  </Typography>
                </Box>
                <Grid container spacing={1}>
                  {item.features.map((feature, j) => (
                    <Grid item xs={12} key={j}>
                      <Typography
                        component={'p'}
                        align={'center'}
                        style={{
                          textDecoration: !feature.isIncluded
                            ? 'line-through'
                            : 'none',
                        }}
                      >
                        {feature.title}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                <CardActions sx={{ justifyContent: 'center', marginTop: 4 }}>
                  <SignInEventsForm
                    title={`${item.title} - ${item.features[0].title}`}
                    buttonText="Objednat se"
                    predmet={`${item.title} - ${item.features[0].title}`}
                  />
                </CardActions>
              </CardContent>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box marginY={6}>
            <Typography
              variant={'h4'}
              sx={{ fontWeight: 700 }}
              align="center"
              gutterBottom
            >
              nebo
            </Typography>
            <Typography color="text.secondary" align="center">
              Chcete někomu ve svém životě pomoci a změnit jeho život k lepšímu.
              Kupte mu dárkový poukaz.
            </Typography>
          </Box>
          <Box
            boxShadow={3}
            radius={2}
            pb={1}
            sx={{
              '& img': { WebkitBorderRadius: theme.shape.borderRadius },
            }}
          >
            <StaticImage
              src="../../../images/darkovyPoukazAccessBars.png"
              alt="darkovy Poukaz Access Bars"
              style={{ borderRadius: '10px', webkitBorderRadius: '10px' }}
            />
          </Box>
          <SignInEventsForm
            title="Koupit dárkový poukaz na Access Bars"
            buttonText="Koupit"
            predmet="Access bars poukaz"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Price;
