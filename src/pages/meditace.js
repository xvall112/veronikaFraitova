import React from 'react';
import MeditaceView from '../views/Meditace/MeditaceView';
import Seo from '../components/Seo';

const Konzultace = () => {
  return (
    <div>
      <Seo
        title="Meditace"
        description="V hluboké meditaci se léčí a čistí fyzické tělo i těla energetická. Dostanete se do změněného stavu vědomí a poznáváte sami sebe. Začnou se dít zásadní a pozitivní změny."
      />
      <MeditaceView />
    </div>
  );
};

export default Konzultace;
