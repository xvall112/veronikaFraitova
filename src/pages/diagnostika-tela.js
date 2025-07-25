import React from 'react';
import DiagnostikaTelaView from '../views/DiagnostikaTela/DiagnostikaTelaView';
import Seo from '../components/Seo';
const Konzultace = () => {
  return (
    <div>
      <Seo
        title="Diagnostika těla"
        description="Diagnostika a terapeutická práce s přístrojem OBERON."
      />
      <DiagnostikaTelaView />
    </div>
  );
};

export default Konzultace;
