import React from 'react';
import Main from 'layouts/Main';
import Hero from './components/Hero';
import Container from 'components/Container';
import AboutMe from './components/AboutMe';
import Box from '@mui/material/Box';
import Offers from './components/Offers';
import Blog from './components/Blog';

import New from './components/New';
import { alpha, useTheme } from '@mui/material/styles';
import FeaturedProducts from './components/FeaturedProducts';
import Title from '../../components/Title';
import Reviews from '../../components/Reviews';
import Newsletter from './components/Newsletter';

const Index = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
        <Container>
          <Newsletter />
        </Container>
        {/*  <Box paddingTop={{ md: 8 }}>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <NewsletterWithCard />
          </Container>
        </Box>
      </Box> */}

        <Container>
          <FeaturedProducts />
        </Container>
      </Box>
      <Container>
        <Title title="NEJNOVĚJŠÍ" />
        <New />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Title title="O MNĚ" />
          <AboutMe />
        </Container>
      </Box>

      <Container>
        <Title title="NABÍZÍM" />
        <Offers />
      </Container>

      <Box
        component={'svg'}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
        sx={{
          marginBottom: -1,
          width: 1,
        }}
      >
        <path
          fill={theme.palette.alternate.main}
          d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
        ></path>
      </Box>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Title title="BLOG" />
          <Blog />
        </Container>
      </Box>
      <Container>
        <Reviews />
      </Container>
    </Main>
  );
};

export default Index;
