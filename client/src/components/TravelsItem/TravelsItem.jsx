import React from "react";
import TravelsCardIcon from "../TravelsCardIcon";

import "./travelsItem.scss";

const TravelsItem = () => {
  return (
    <div className='travels-card'>
      <div className='travels-card__body'>
        <div className='travels-card__icon'>
          <TravelsCardIcon />
        </div>
        <div className='travels-card__info'>
          <h3 className='travels-card__heading'>Египет</h3>
          <time className='travels-card__date'>25.06.2023</time>
        </div>
      </div>
      <div className='travels-card__menu'>
        <button className='travels-card__btn'>Изменить</button>
        <button className='travels-card__btn travels-card__btn--orange'>удалить</button>
      </div>
    </div>
  );
};

export default TravelsItem;
