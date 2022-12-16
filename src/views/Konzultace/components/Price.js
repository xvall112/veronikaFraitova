import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '../../../components/Dialog';

import Container from 'components/Container';

const mock = [
  {
    title: '1x konzultace',
    price: '1000',
    features: [
      {
        title: '1 x 70 min',
        isIncluded: true,
      },
      {
        title: 'Osobně',
        isIncluded: true,
      },
      {
        title: 'Online',
        isIncluded: true,
      },
    ],
    isHighlighted: false,
    btnText: 'Objednat se',
  },
  {
    title: '4 x konzultace',
    price: '3500',
    features: [
      {
        title: '4 x 70 min',
        isIncluded: true,
      },
      {
        title: 'Osobně',
        isIncluded: true,
      },
      {
        title: 'Online',
        isIncluded: true,
      },
      {
        title: 'Platnost 3 měsíce',
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
                  <Dialog />
                </CardActions>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Price;
