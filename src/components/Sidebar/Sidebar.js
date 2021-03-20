/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { AppContext } from 'context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './Sidebar.scss';

const Sidebar = () => {
  const { isSidebarVisible, toggleSidebarVisibility } = useContext(AppContext);

  const sidebarClassName = isSidebarVisible ? 'sidebar sidebar--visible' : 'sidebar';

  const getImageSource = () => {
    const genders = ['women', 'men'];
    const randomGender = ~~(Math.random() * 2);
    const randomNumber = ~~(Math.random() * 100);
    const baseURL = `https://randomuser.me/api/portraits/${genders[randomGender]}/${randomNumber}.jpg`;

    return baseURL;
  };

  return (
    <>
      <nav className={sidebarClassName}>
        <button className='sidebar__close-sidebar-button' onClick={toggleSidebarVisibility}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className='sidebar__image-container'>
          <img src={getImageSource()} alt="user's avatar" className='sidebar__image' />
        </div>
        <ul className='sidebar__list'>
          <li className='sidebar__list-item'>
            <a href='#' className='sidebar__link'>
              Home
            </a>
          </li>
          <li className='sidebar__list-item'>
            <a href='#' className='sidebar__link'>
              Portfolio
            </a>
          </li>
          <li className='sidebar__list-item'>
            <a href='#' className='sidebar__link'>
              Blog
            </a>
          </li>
          <li className='sidebar__list-item'>
            <a href='#' className='sidebar__link'>
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
