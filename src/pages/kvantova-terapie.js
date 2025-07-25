import React from 'react';
import KvantovaTerapieView from '../views/KvantovaTerapie/kvantovaTerapieView';
import Seo from '../components/Seo';
const KvantovaTerapie = () => {
  return (
    <div>
      <Seo
        title="Kvantová terapie"
        description="Práce s informacemi v kvantovém poli klienta."
      />
      <KvantovaTerapieView />
    </div>
  );
};

export default KvantovaTerapie;
