import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'context';

import './Blog.scss';

const Blog = () => {
  const { sectionRef } = useContext(AppContext);

  return (
    <section className='blog' ref={sectionRef}>
      <h2 className='blog__title'>Blog</h2>
      <h3 className='blog__post-title'>Post #1</h3>
      <p className='blog__post-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quaerat quidem. Quibusdam
        in illo quo dolorum, culpa distinctio fugit modi accusantium velit saepe tenetur corporis
        odit neque ullam corrupti hic?
      </p>
      <h3 className='blog__post-title'>Post #2</h3>
      <p className='blog__post-content'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis error, quod ut aut delectus
        dicta pariatur, quidem sapiente rem ex minima molestiae minus atque, nostrum sunt molestias
        voluptatum laboriosam. Architecto.
      </p>
    </section>
  );
};

export default Blog;
