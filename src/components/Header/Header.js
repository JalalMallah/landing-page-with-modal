import { useContext, useEffect } from 'react';
import { AppContext } from 'context';

import illustration from 'assets/hero-illustration.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = () => {
  const { toggleModalVisibility, toggleSidebarVisibility } = useContext(AppContext);

  useEffect(() => {
    updateCssWithCalculatedVh();
  }, []);

  function updateCssWithCalculatedVh() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <>
      <header className='header'>
        <button className='header__open-sidebar-button' onClick={toggleSidebarVisibility}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className='header__hero-image-container'>
          <img src={illustration} alt='hero' className='header__hero-image' />
        </div>
        <h1 className='header__title'>My Landing Page</h1>
        <p className='header__subtitle'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ea!
        </p>
        <button className='header__open-modal-button' onClick={toggleModalVisibility}>
          Sign Up
        </button>
        <div className='header__scroll-icon'>
          <span className='header__moving-scroll-circle'></span>
        </div>
      </header>
    </>
  );
};

export default Header;
