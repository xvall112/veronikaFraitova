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
    title: 'Konzultace',
    img: (
      <StaticImage
        src="../../../images/konzultace.png"
        alt="konzultace"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/konzultace',
  },
  {
    title: 'Workshopy',
    img: (
      <StaticImage
        src="../../../images/osobniWorkshop.png"
        alt="osobniWorkshop"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/workshopy',
  },
  {
    title: 'Kurzy',
    img: (
      <StaticImage
        src="../../../images/osobniWorkshop.png"
        alt="kurzy"
        placeholder="blurred"
        layout="fixed"
        height={200}
      />
    ),
    slug: '/kurzy',
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
          <Grid item xs={12} sm={6} md={6} key={i}>
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
      </Grid>
    </Box>
  );
};

export default Blog;
