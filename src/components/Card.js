import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ tour }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={tour.img} alt="" />
      </div>
      <div className="card-info">
        <p>{tour.name}</p>
        <p>Ngày khởi hành: {tour.date}</p>
        <p>Giá: {tour.price}</p>
      </div>
    </div>
  );
};

export default Card;
