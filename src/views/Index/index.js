import React from 'react';
import Main from 'layouts/Main';
import Hero from './components/Hero';
import Container from 'components/Container';
import NewsletterWithCard from './components/NewsletterWithCard';
import AboutMe from './components/AboutMe';
import Box from '@mui/material/Box';
import Offers from './components/Offers';
import Blog from './components/Blog';
import LiveEnergy from './components/LiveEnergy';
import Newsletter from './components/Newsletter';
import New from './components/New';
import { alpha, useTheme } from '@mui/material/styles';
import FeaturedProducts from './components/FeaturedProducts';
import Title from '../../components/Title';

const Index = () => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Hero />
      </Container>

      {/*  <Box paddingTop={{ md: 8 }}>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <NewsletterWithCard />
          </Container>
        </Box>
      </Box> */}
      <Box bgcolor={alpha(theme.palette.primary.main, 0.1)}>
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
        <LiveEnergy />
      </Container>
      <Container>
        <Title title="NABÍZÍM" />
        <Offers />
      </Container>
      <Container>
        <Title title="BLOG" />
        <Blog />
      </Container>
      <Container>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default Index;
