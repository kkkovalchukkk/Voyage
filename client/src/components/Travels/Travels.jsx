import React from "react";
import TravelsList from "../TravelsList";
import TravelsItem from "../TravelsItem";
import "./travels.scss";

const Travels = () => {
  return (
    <section className='travels-section'>
      <div className='wrapper travels-section__wrapper'>
        <div className='subheading-field'>
          <h2 className='subheading'>Путешествия</h2>
          <button className='btn btn--dark'>Добавить путешествие </button>
        </div>
        <TravelsList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
            <TravelsItem />
          ))}
        </TravelsList>
      </div>
    </section>
  );
};

export default Travels;
