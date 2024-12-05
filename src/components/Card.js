import React from 'react';
import './Card.css';

const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="details">
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default Card;
