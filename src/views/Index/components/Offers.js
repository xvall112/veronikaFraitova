/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    title: 'Terapie',
    img: (
      <StaticImage
        src="../../../images/undraw_super_thank_you_re_f8bo.svg"
        alt="terapie"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/terapie',
  },
  {
    title: 'Koučink',
    img: (
      <StaticImage
        src="../../../images/undraw_through_the_park_lxnl.svg"
        alt="koucink"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/koucink',
  },
  {
    title: 'Kvantové proměny',
    img: (
      <StaticImage
        src="../../../images/undraw_my_universe_803e.svg"
        alt="konzultace"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/konzultace',
  },
  {
    title: 'Akce',
    img: (
      <StaticImage
        src="../../../images/osobniWorkshop.png"
        alt="osobniWorkshop"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/events',
  },

  {
    title: 'Meditace',
    img: (
      <StaticImage
        src="../../../images/meditace.png"
        alt="meditace"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/meditace',
  },
];

const Blog = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={4}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box
              component={Card}
              padding={4}
              borderRadius={theme.borderRadius}
              boxShadow={1}
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              variant={'outlined'}
            >
              <Box
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                spacing={2}
              >
                <Box marginBottom={1}>{item.img}</Box>
                <Typography
                  variant={'h4'}
                  gutterBottom
                  sx={{ fontWeight: 700 }}
                >
                  {item.title}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth={true}
                  onClick={() => {
                    navigate(item.slug);
                  }}
                >
                  VÍCE
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4}>
          <Box
            component={Card}
            padding={4}
            borderRadius={theme.borderRadius}
            boxShadow={1}
            width={1}
            height={1}
            data-aos={'fade-up'}
            data-aos-delay={3 * 100}
            data-aos-offset={100}
            data-aos-duration={600}
            variant={'outlined'}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'center'}
              alignItems={'center'}
              spacing={2}
            >
              <Box marginBottom={1}>
                <StaticImage
                  src="../../../images/osobniWorkshop.png"
                  alt="kurzy"
                  placeholder="blurred"
                  layout="fixed"
                  height={200}
                />
              </Box>
              <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
                Kurzy
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                fullWidth={true}
                onClick={() => {
                  location.href = 'https://veronikafraitova.teachable.com/';
                }}
              >
                VÍCE
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Blog;
