import React from 'react';
import DiagnostikaTelaView from '../views/DiagnostikaTela/DiagnostikaTelaView';
import Seo from '../components/Seo';
const Konzultace = () => {
  return (
    <div>
      <Seo
        title="Energetická analýza"
        description="Energetická analýza těla s následnou METAterapií přístrojem OBERON SYSTEM - QUANTUM"
      />
      <DiagnostikaTelaView />
    </div>
  );
};

export default Konzultace;
