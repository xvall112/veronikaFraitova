import React from 'react';
import Main from 'layouts/Main';
import Hero from './components/Hero';
import Container from 'components/Container';
import NewsletterWithCard from './components/NewsletterWithCard';

const Index = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container>
        <NewsletterWithCard />
      </Container>
    </Main>
  );
};

export default Index;
