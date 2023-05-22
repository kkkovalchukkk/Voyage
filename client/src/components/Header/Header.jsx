import React from "react";
import logo from "../../assets/img/logo.svg";
import "./header.scss";

const Header = ({showLoginPopup, showRegisterPopup}) => {
  return (
    <header className='header'>
      <div className='wrapper header__wrapper'>
        <a
          href='/'
          className='header__logo-link'
        >
          <img
            src={logo}
            alt=''
            className='header__logo'
          />
        </a>
        <div className='header__menu'>
          <button
            className='header__btn'
            id='header__login-btn'
            onClick={showLoginPopup}
          >
            войти
          </button>
          <button
            className='header__btn header__btn--dark'
            id='header__register-btn'
            onClick={showRegisterPopup}
          >
            регистрация
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
