/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from 'context';

import './Modal.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { isModalVisible, toggleModalVisibility } = useContext(AppContext);

  const modalClassName = isModalVisible ? 'modal modal--visible' : 'modal';

  const modalRef = useRef();

  useEffect(() => {
    if (isModalVisible) {
      window.addEventListener('click', closeModalOnOutsideClick);
    }

    return () => window.removeEventListener('click', closeModalOnOutsideClick);
  }, [isModalVisible]);

  const closeModalOnOutsideClick = e => {
    if (e.target === modalRef.current) {
      toggleModalVisibility();
    }
  };

  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);
  const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={modalClassName} ref={modalRef}>
      <form className='modal__form' autoComplete='off' noValidate onSubmit={handleSubmit}>
        <h2 className='modal__title'>
          Sign up now!
          <button className='modal__close-modal-button' onClick={toggleModalVisibility}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </h2>
        <p className='modal__subtitle'>Register with us to get offers, discounts and much more!</p>
        <div className='modal__form-row'>
          <label htmlFor='name' className='modal__label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='modal__input'
            placeholder='Enter your name'
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className='modal__form-row'>
          <label htmlFor='email' className='modal__label'>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            className='modal__input'
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='modal__form-row'>
          <label htmlFor='password' className='modal__label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            className='modal__input'
            placeholder='Enter your password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='modal__form-row'>
          <label htmlFor='confirm-password' className='modal__label'>
            Confirm password
          </label>
          <input
            type='password'
            name='confirmPassword'
            id='confirm-password'
            className='modal__input'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <button className='modal__submit-button'>Submit</button>
      </form>
    </div>
  );
};

export default Modal;
