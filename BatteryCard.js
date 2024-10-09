import React from 'react';
import './BatteryCard.css';

const BatteryCard = ({ battery }) => {
  return (
    <div className="battery-card">
      <img src={battery.image} alt={battery.name} />
      <h3>{battery.name}</h3>
      <p>{battery.warranty} WARRANTY*</p>
      <p>{battery.description}</p>
      <p className="price">MRP: Rs {battery.price}</p>
      <button onClick={() => alert(`Viewing details for: ${battery.name}`)}>View Details</button>
    </div>
  );
};

export default BatteryCard;
