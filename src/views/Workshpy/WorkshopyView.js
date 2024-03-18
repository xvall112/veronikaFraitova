import React from 'react';
import Headline from '../../components/Headline';
import MainLayout from '../../layouts/Main/Main';
import Container from '../../components/Container';
import Events from './components/Events';
import Features from './components/Features';

const WorshopyView = () => {
  return (
    <div>
      <MainLayout>
        <Container>
          <Headline
            title="Akce"
            subtitle="Hledáte cestu vnitřního rozvoje? Dějí se vám v životě věci, které nejsou podle vašich představ? Nechcete už být oběti svého života, ale chcete začít žít svůj život podle sebe? Chcete se naučit techniku, jak si pomoci k uzdravení? Jste tady správně!"
          />
        </Container>
        <Container>
          <Features />
        </Container>
        <Container>
          <Events />
        </Container>
      </MainLayout>
    </div>
  );
};

export default WorshopyView;
