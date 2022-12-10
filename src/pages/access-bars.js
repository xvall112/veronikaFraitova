import React from 'react';
import AccessBarsView from '../views/AccessBars/AccessBarsView';
import Seo from '../components/Seo';
const Konzultace = () => {
  return (
    <div>
      <Seo
        title="Access Bars"
        description="Práce s vědomím a podvědomou myslí. Můžeme sami regulovalovat a uzdravovat své tělo. Máme v sobě mimořádné schopnosti, které to dokáží."
      />
      <AccessBarsView />
    </div>
  );
};

export default Konzultace;
