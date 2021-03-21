import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'context';

import './Contact.scss';

const Contact = () => {
  const { sectionRef } = useContext(AppContext);

  return (
    <section className='contact' ref={sectionRef}>
      <h2 className='contact__title'>Contact</h2>
      <p className='contact__text'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum vero ex ullam vel soluta
        vitae. Dignissimos non cumque, maiores, velit voluptates cum vitae quasi aut optio vel
        quaerat fugit? Temporibus!
      </p>
      <p className='contact__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis quidem ex magnam
        sint? Veritatis distinctio ipsam consectetur impedit non ad aperiam minima nemo alias fugit!
        Officiis eius asperiores enim?
      </p>
    </section>
  );
};

export default Contact;
