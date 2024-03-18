import React from 'react';
import Box from '@mui/material/Box';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Headline from '../../components/Headline';
import Reviews from '../../components/Reviews';
import Price from './components/Price';
import Work from './components/Work';
import Features from './components/Features';

const TerapieView = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <Headline
            title="Terapie"
            subtitle="NLP – Neuro-Lingvistické programování"
          />
        </Container>
        <Container>
          <Features />
        </Container>
        <Box bgcolor={'alternate.main'}>
          <Price />
        </Box>
        <Container>
          <Reviews />
        </Container>
      </MainLayout>
    </>
  );
};

export default TerapieView;
