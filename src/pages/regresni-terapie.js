import React from 'react';
import RegresniTerapieView from '../views/RegresniTerapie/regresniTerapieView';
import Seo from '../components/Seo';

const RegresniTerapie = () => {
  return (
    <div>
      <Seo
        title="Regresní terapie"
        description="Hlubinná regresní terapie otevírá cestu k hlubokému sebepoznání a vnitřnímu osvobození."
      />
      <RegresniTerapieView />
    </div>
  );
};

export default RegresniTerapie;
