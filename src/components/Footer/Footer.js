import React from 'react';

import './Footer.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <span className='footer__icon'>
        <FontAwesomeIcon icon={faTwitter} />
      </span>
      <span className='footer__icon'>
        <FontAwesomeIcon icon={faFacebook} />
      </span>
      <span className='footer__icon'>
        <FontAwesomeIcon icon={faLinkedin} />
      </span>
      <span className='footer__icon'>
        <FontAwesomeIcon icon={faGithub} />
      </span>
    </footer>
  );
};

export default Footer;
