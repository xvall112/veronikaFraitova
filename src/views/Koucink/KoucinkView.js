import React from 'react';
import Box from '@mui/material/Box';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Headline from '../../components/Headline';
import Reviews from '../../components/Reviews';
import Price from '../../components/Price';
import Work from './components/Work';
import Features from './components/Features';

const AccessBarsView = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <Headline
            title="Koučink"
            subtitle="Chcete se v životě posunout? Potřebujete životní změnu?
            NLP koučink je úžasným, efektivním nástrojem v jakékoli oblasti osobního rozvoje a životních změn. "
          />
        </Container>
        <Container>
          <Work />
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

export default AccessBarsView;
