import React from 'react';
import Box from '@mui/material/Box';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import MeditaceNaMiru from './components/MeditaceNaMiru';
import Products from './components/Products';

const MeditaceView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Meditace"
            subtitle="V hluboké meditaci se léčí a čistí fyzické tělo i těla energetická. Dostanete se do změněného stavu vědomí a poznáváte sami sebe. Začnou se dít zásadní a pozitivní změny."
          />
        </Container>
        <Container>
          <MeditaceNaMiru />
          <Box paddingTop={4}>
            <Products />
          </Box>
        </Container>
      </MainLayout>
    </div>
  );
};

export default MeditaceView;
