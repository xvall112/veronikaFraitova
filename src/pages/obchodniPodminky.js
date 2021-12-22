import React from 'react';
import ObchodniPodminkyView from '../views/ObchodniPodminky/ObchodniPodminky';
import Seo from '../components/Seo';

const ObchodniPodminky = () => {
  return (
    <div>
      <Seo title="Obchodni Podminky" />
      <ObchodniPodminkyView />
    </div>
  );
};

export default ObchodniPodminky;
