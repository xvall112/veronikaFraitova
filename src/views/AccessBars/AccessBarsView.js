import React from 'react';
import Box from '@mui/material/Box';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Headline from '../../components/Headline';
import Reviews from '../../components/Reviews';
import Price from './components/Price';
import Work from './components/Work';
import Features from './components/Features';
import Certificate from './components/Certificate';

const AccessBarsView = () => {
  return (
    <>
      <MainLayout>
        <Container>
          <Headline
            title="Access Bars"
            subtitle="Jedinečná relaxační, antistresová a uvolňující technika Access Bars"
          />
        </Container>
        <Container>
          <Work />
        </Container>
        <Container>
          <Features />
        </Container>
        {/* <Container>
          <Solutions />
        </Container> */}
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Price />
          </Container>
        </Box>
        <Container>
          <Certificate />
        </Container>
        <Container>
          <Reviews />
        </Container>
      </MainLayout>
    </>
  );
};

export default AccessBarsView;
