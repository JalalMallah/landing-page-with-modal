import { useContext } from 'react';
import { AppContext } from 'context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

const Header = () => {
  const { toggleSidebarVisibility } = useContext(AppContext);

  const handleOpenModalClick = () => console.log('open modal');

  return (
    <>
      <header className='header'>
        <button className='header__open-sidebar-button' onClick={toggleSidebarVisibility}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className='header__title'>My Landing Page 👨‍💻</h1>
        <p className='header__subtitle'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ea!
        </p>
        <button className='header__open-modal-button' onClick={handleOpenModalClick}>
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
