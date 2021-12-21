import React from 'react';
import KonzultaceView from '../views/Konzultace/KonzultaceView';
import Seo from '../components/Seo';
const Konzultace = () => {
  return (
    <div>
      <Seo title="Konzultace" />
      <KonzultaceView />
    </div>
  );
};

export default Konzultace;
