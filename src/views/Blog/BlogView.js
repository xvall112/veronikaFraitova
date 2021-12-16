import React from 'react';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';

const BlogView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Blog"
            subtitle="Práce s vědomím a podvědomou myslí. Můžeme sami regulovalovat a uzdravovat své tělo. Máme v sobě mimořádné schopnosti, které to dokáží."
          />
        </Container>
      </MainLayout>
    </div>
  );
};

export default BlogView;
