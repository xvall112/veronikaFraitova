import React from 'react';
import WorkshopyView from '../views/Workshpy/WorkshopyView';
import Seo from '../components/Seo';
const Workshopy = () => {
  return (
    <div>
      <Seo
        title="Workshopy"
        description="Hledáte cestu vnitřního rozvoje? Dějí se vám v životě věci, které nejsou podle vašich představ? Nechcete už být oběti svého života, ale chcete začít žít svůj život podle sebe? Chcete se naučit techniku, jak si pomoci k uzdravení? Jste tady správně!"
      />
      <WorkshopyView />
    </div>
  );
};

export default Workshopy;
