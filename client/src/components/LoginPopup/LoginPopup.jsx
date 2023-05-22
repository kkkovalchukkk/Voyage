import React from "react";

import "./LoginPopup.scss";
import logo from "../../assets/img/logo.svg";

import CloseIcon from "../CloseIcon";

const LoginPopup = ({loginPopupIsToggle, hideLoginPopup}) => {
  const className = loginPopupIsToggle ? "popup" : "popup popup--hidden";
  return (
    <div className={className}>
      <button
        className='popup__close-btn'
        onClick={hideLoginPopup}
      >
        <CloseIcon />
      </button>
      <img
        src={logo}
        alt=''
        className='popup__logo'
      />
      <h2 className='subheading popup__heading'>Вход</h2>
      <form
        className='popup__form'
        id='login-form'
      >
        <input
          type='text'
          placeholder='Логин'
          className='popup__form-input'
        />
        <input
          type='password'
          placeholder='Пароль'
          className='popup__form-input'
        />
        <button className='popup__submit-btn'>Войти</button>
      </form>
    </div>
  );
};

export default LoginPopup;
