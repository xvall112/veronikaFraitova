import React from 'react';
import KoucinkView from '../views/Koucink/KoucinkView';
import Seo from '../components/Seo';

const Terapie = () => {
  return (
    <div>
      <Seo
        title="Koucink"
        description="Chcete se v životě posunout? Potřebujete životní změnu?
        NLP koučink je úžasným, efektivním nástrojem v jakékoli oblasti osobního rozvoje a životních změn. "
      />
      <KoucinkView />
    </div>
  );
};

export default Terapie;
