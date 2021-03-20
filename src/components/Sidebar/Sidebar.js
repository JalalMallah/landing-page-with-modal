/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef } from 'react';
import { AppContext } from 'context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
  const { isSidebarVisible, toggleSidebarVisibility } = useContext(AppContext);

  const sidebarClassName = isSidebarVisible ? 'sidebar sidebar--visible' : 'sidebar';

  const sidebarRef = useRef();

  const getImageSource = () => {
    const genders = ['women', 'men'];
    const randomGender = ~~(Math.random() * 2);
    const randomNumber = ~~(Math.random() * 100);
    const baseURL = `https://randomuser.me/api/portraits/${genders[randomGender]}/${randomNumber}.jpg`;

    return baseURL;
  };

  return (
    <>
      <nav className={sidebarClassName} ref={sidebarRef}>
        <button className='sidebar__close-sidebar-button' onClick={toggleSidebarVisibility}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className='sidebar__image-container'>
          <img src={getImageSource()} alt="user's avatar" className='sidebar__image' />
        </div>
        <ul className='sidebar__list'>
          <li className='sidebar__list-item'>
            <NavLink
              to='/'
              exact
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={toggleSidebarVisibility}
            >
              Home
            </NavLink>
          </li>
          <li className='sidebar__list-item'>
            <NavLink
              to='/portfolio'
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={toggleSidebarVisibility}
            >
              Portfolio
            </NavLink>
          </li>
          <li className='sidebar__list-item'>
            <NavLink
              to='/blog'
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={toggleSidebarVisibility}
            >
              Blog
            </NavLink>
          </li>
          <li className='sidebar__list-item'>
            <NavLink
              to='/contact'
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={toggleSidebarVisibility}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
