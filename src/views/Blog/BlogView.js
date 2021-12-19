import React from 'react';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Result from './components/Result/Result';
const BlogView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline title="Blog" />
        </Container>
        <Container>
          <Result />
        </Container>
      </MainLayout>
    </div>
  );
};

export default BlogView;
