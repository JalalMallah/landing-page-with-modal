import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'context';

import './Portfolio.scss';

const Portfolio = () => {
  const { sectionRef } = useContext(AppContext);

  return (
    <section className='portfolio' ref={sectionRef}>
      <h2 className='portfolio__title'>Portfolio</h2>
      <p className='portfolio__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio labore blanditiis.
        Qui ea enim libero in delectus quas, dolorum quo voluptate id est voluptas reprehenderit
        odit voluptates dolor assumenda.
      </p>
      <p className='portfolio__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore hic maiores, ratione
        pariatur quisquam quae animi repudiandae fuga nesciunt architecto sint, dicta dolor, libero
        deserunt velit dolores. Enim, optio iusto!
      </p>
    </section>
  );
};

export default Portfolio;
