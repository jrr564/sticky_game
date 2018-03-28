import React from "react";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
      <h1>{props.id}. {props.name}</h1>
    </div>

  </div>
);

export default Card;

