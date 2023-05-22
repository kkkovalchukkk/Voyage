import React from "react";
import "./RegisterPopup.scss";

import logo from "../../assets/img/logo.svg";

import CloseIcon from "../CloseIcon";

const RegisterPopup = ({registerPopupIsToggle, hideRegisterPopup}) => {
  const classname = registerPopupIsToggle ? "popup" : "popup popup--hidden";
  return (
    <div className={classname}>
      <button
        className='popup__close-btn'
        onClick={hideRegisterPopup}
      >
        <CloseIcon />
      </button>
      <img
        src={logo}
        alt=''
        className='popup__logo'
      />
      <h2 className='subheading popup__heading'>Регистрация</h2>
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
        <input
          type='password'
          placeholder='Повторите пароль'
          className='popup__form-input'
        />
        <button className='popup__submit-btn'>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterPopup;
