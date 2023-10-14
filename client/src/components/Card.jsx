import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function CarCard(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>Color: {props.color}</p>
      <p>Interior: {props.interior}</p>
      <p>Roof: {props.roof}</p>
      <p>Wheels: {props.wheels}</p>
      <p>Price: {props.price}</p>
      <Link to={`http://localhost:5173/customcars/${props.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
}

export default CarCard;
