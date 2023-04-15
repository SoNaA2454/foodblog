import React from "react";
import './itemcard.css';

const ItemCard = (props) => {
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card">
        <img src={props.img} alt="side-logo" className="card-img"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <button className="buttonn">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
