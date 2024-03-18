import React from 'react';
import TerapieView from '../views/Terapie/TerapieView';
import Seo from '../components/Seo';

const Terapie = () => {
  return (
    <div>
      <Seo
        title="Terapie"
        description="NLP – Neuro-Lingvistické programování "
      />
      <TerapieView />
    </div>
  );
};

export default Terapie;
