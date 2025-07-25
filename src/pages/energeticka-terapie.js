import React from 'react';
import EnergetickaTerapieView from '../views/EnergetickáTerapie/EnergetickaTerapieView';
import Seo from '../components/Seo';

const EnergetickaTerapie = () => {
  return (
    <div>
      <Seo
        title="Energetická terapie"
        description="Naše tělo není jen to, co vidíme. To je jen viditelná špička ledovce. Uvnitř nás existuje rozsáhlý energetický systém, skrze který proudí životní energie."
      />
      <EnergetickaTerapieView />
    </div>
  );
};

export default EnergetickaTerapie;
