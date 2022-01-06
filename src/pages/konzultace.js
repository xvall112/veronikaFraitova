import React from 'react';
import KonzultaceView from '../views/Konzultace/KonzultaceView';
import Seo from '../components/Seo';
const Konzultace = () => {
  return (
    <div>
      <Seo
        title="Konzultace"
        description="Práce s vědomím a podvědomou myslí. Můžeme sami regulovalovat a uzdravovat své tělo. Máme v sobě mimořádné schopnosti, které to dokáží."
      />
      <KonzultaceView />
    </div>
  );
};

export default Konzultace;
