import React from 'react';
import { useContext } from 'react';
import { AppContext } from 'context';

import './Main.scss';

const Main = () => {
  const { sectionRef } = useContext(AppContext);

  return (
    <main className='main' ref={sectionRef}>
      <h2 className='main__subtitle'>What is this landing page about? 🤔</h2>
      <p className='main__text'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut modi officiis iusto iste
        molestias beatae quo animi, veritatis delectus non tempora at reiciendis ducimus aliquid
        nesciunt. Tempore deleniti deserunt nostrum.
      </p>
      <p className='main__text'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse delectus eos doloribus
        commodi placeat eum soluta totam amet illum natus!
      </p>

      <h2 className='main__subtitle'>Tell me more! 💁</h2>
      <p className='main__text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus saepe perspiciatis
        facilis neque, autem magni dolorum ad aperiam fugit beatae at, aliquam libero recusandae qui
        doloremque soluta dolore ea, ipsa reiciendis eveniet. Enim voluptatibus magnam illum animi,
        dolor sed adipisci.
      </p>

      <h2 className='main__subtitle'>What are the benefits? 🔥</h2>
      <ul className='main__list'>
        <li className='main__list-item'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </li>
        <li className='main__list-item'>Lorem ipsum dolor sit.</li>
        <li className='main__list-item'>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>

      <p className='main__text'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quidem placeat nobis
        saepe. Earum tenetur, ut, distinctio enim placeat molestias fuga animi nemo modi voluptas
        tempora ex, dicta saepe vero iure corporis. Assumenda laudantium laboriosam ex sequi
        reiciendis molestias animi odit magni recusandae similique, temporibus nulla doloribus,
        voluptatum natus debitis commodi modi fuga impedit non vitae facilis! Voluptatibus, dolorum
        voluptate.
      </p>
    </main>
  );
};

export default Main;
