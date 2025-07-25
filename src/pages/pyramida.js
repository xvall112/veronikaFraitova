import React from 'react';
import PyramidaView from '../views/Pyramida/pyramidaView';
import Seo from '../components/Seo';

const PyramidaPage = () => {
  return (
    <div>
      <Seo
        title="Pyramida"
        description="Představte si místo, kde se čas zpomaluje, tělo se noří do hlubokého klidu a mysl se tiší"
      />
      />
      <PyramidaView />
    </div>
  );
};

export default PyramidaPage;
