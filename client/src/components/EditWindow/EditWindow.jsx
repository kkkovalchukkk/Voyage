import React from "react";
import CloseIcon from "../CloseIcon";

import "./EditWindow.scss";

import travelImg from "../../assets/img/travelImg.svg";

const EditWindow = () => {
  return (
    <div className='edit-window'>
      <button className='edit-window__close-btn'>
        <CloseIcon />
      </button>
      <h2 className='subheading edit-window__subheading'>Редактировать путешествие</h2>
      <div className='edit-window__body'>
        <img
          src={travelImg}
          alt=''
          className='edit-window__img'
        />
        <form className='edit-window__form'>
          <label className='edit-window__label'>
            <span className='edit-window__label-value'>название путешествия: </span>
            <input
              type='text'
              value='Египет'
              className='edit-window__input'
            />
          </label>
          <label className='edit-window__label'>
            <span className='edit-window__label-value'>название путешествия: </span>
            <input
              type='text'
              value='Египет'
              className='edit-window__input'
            />
          </label>
          <label className='edit-window__label'>
            <span className='edit-window__label-value'>название путешествия: </span>
            <input
              type='text'
              value='Египет'
              className='edit-window__input'
            />
          </label>
          <label className='edit-window__label'>
            <span className='edit-window__label-value'>название путешествия: </span>
            <input
              type='text'
              value='Египет'
              className='edit-window__input'
            />
          </label>
          <label className='edit-window__label'>
            <span className='edit-window__label-value'>название путешествия: </span>
            <input
              type='text'
              value='Египет'
              className='edit-window__input'
            />
          </label>
          <label className='edit-window__label'>
            <span className='edit-window__label-value'>название путешествия: </span>
            <input
              type='text'
              value='Египет'
              className='edit-window__input'
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default EditWindow;
