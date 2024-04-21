import React from 'react';
import Box from '@mui/material/Box';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Work from './components/Work';
import Solutions from './components/Solutions';
import Price from './components/Price';
import Reviews from '../../components/Reviews';

const KonzultaceView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Konzultace"
            subtitle="Práce s vědomím a podvědomou myslí. Můžeme sami regulovalovat a uzdravovat své tělo. Máme v sobě mimořádné schopnosti, které to dokáží."
          />
        </Container>
        <Container>
          <Work />
        </Container>
        <Container>
          <Solutions />
        </Container>
        <Box bgcolor={'alternate.main'}>
          <Container>
            <Price />
          </Container>
        </Box>
        <Container>
          <Reviews />
        </Container>
      </MainLayout>
    </div>
  );
};

export default KonzultaceView;
