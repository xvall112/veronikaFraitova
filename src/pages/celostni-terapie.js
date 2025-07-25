import React from 'react';
import CelostniTerapieView from '../views/CelostniTerapie/CelostniTerapieView';
import Seo from '../components/Seo';
const Konzultace = () => {
  return (
    <div>
      <Seo
        title="Celostní terapie"
        description="Propojuji práci s tělem, myslí, duší i duchem."
      />
      <CelostniTerapieView />
    </div>
  );
};

export default Konzultace;
