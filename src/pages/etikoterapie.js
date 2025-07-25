import React from 'react';
import EtikoterapieView from '../views/Etikoterapie/etikoterapieView';
import Seo from '../components/Seo';

const Etikoterapie = () => {
  return (
    <div>
      <Seo
        title="Etikoterapie"
        description="Etikoterapie je jemná, ale hluboká cesta k uzdravení, která pracuje s vnitřními příčinami našich nemocí, potíží i narušených vztahů. "
      />
      <EtikoterapieView />
    </div>
  );
};

export default Etikoterapie;
