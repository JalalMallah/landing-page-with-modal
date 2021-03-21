/* eslint-disable react-hooks/exhaustive-deps */
import { useContext } from 'react';
import { AppContext } from 'context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { NavLink } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => {
  const { isSidebarVisible, toggleSidebarVisibility, sectionRef } = useContext(AppContext);

  const sidebarClassName = isSidebarVisible ? 'sidebar sidebar--visible' : 'sidebar';

  const getImageSource = () => {
    const genders = ['women', 'men'];
    const randomGender = ~~(Math.random() * 2);
    const randomNumber = ~~(Math.random() * 100);
    const baseURL = `https://randomuser.me/api/portraits/${genders[randomGender]}/${randomNumber}.jpg`;

    return baseURL;
  };

  const handleNavLinkClick = () => {
    sectionRef.current.scrollIntoView(true, { behavior: 'smooth' });
    toggleSidebarVisibility();
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
            <NavLink
              to='/'
              exact
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={handleNavLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li className='sidebar__list-item'>
            <NavLink
              to='/portfolio'
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={handleNavLinkClick}
            >
              Portfolio
            </NavLink>
          </li>
          <li className='sidebar__list-item'>
            <NavLink
              to='/blog'
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={handleNavLinkClick}
            >
              Blog
            </NavLink>
          </li>
          <li className='sidebar__list-item'>
            <NavLink
              to='/contact'
              className='sidebar__link'
              activeClassName='sidebar__link--active'
              onClick={handleNavLinkClick}
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
