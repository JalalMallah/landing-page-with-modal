import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = () => {
  const handleOpenSidebarClick = () => console.log('open sidebar');
  const handleOpenModalClick = () => console.log('open modal');

  return (
    <>
      <header className='header'>
        <button className='header__open-sidebar-button' onClick={handleOpenSidebarClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className='header__title'>My Landing Page 👨‍💻</h1>
        <p className='header__subtitle'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ea!
        </p>
        <button className='header__open-modal-button' onClick={handleOpenModalClick}>
          Sign Up
        </button>
      </header>
    </>
  );
};

export default Header;
