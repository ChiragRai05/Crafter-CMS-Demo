import React from 'react';
import BatteryCard from './BatteryCard';
import './BatteryList.css';

const BatteryList = () => {
  const batteries = [
    {
      name: 'EXIDE RIDE (RIDE35L)',
      warranty: '24 MONTH',
      description: 'Excellent spill resistance characteristics',
      price: 3674,
      image: '/assets/images/ride35l.jpg'
    },
    {
      name: 'EXIDE DRIVE (DRIVE35L)',
      warranty: '36 MONTH',
      description: 'Optimized Alloy System to suit high temperature',
      price: 4220,
      image: '/assets/images/drive35l.jpg'
    },
    {
      name: 'EXIDE EPIQ (EPIQ35L)',
      warranty: '77 MONTH',
      description: 'PENTA ALLOY which enhances corrosion resistance in service',
      price: 5735,
      image: '/assets/images/epiq35l.jpg'
    },
    {
      name: 'EXIDE MILEAGE (ML38B20L)',
      warranty: '60 MONTH',
      description: 'Robust design to take care of stringent application requirements',
      price: 4819,
      image: '/assets/images/ml38b20l.jpg'
    }
  ];

  return (
    <div className="battery-list-container">
      <h2>4 result(s) found matching your search</h2>
      <p>Exide Batteries just right for your Honda cars India limited are listed here! Choose the one that best suits your requirement!</p>

      <div className="battery-grid">
        {batteries.map((battery, index) => (
          <BatteryCard key={index} battery={battery} />
        ))}
      </div>
    </div>
  );
};

export default BatteryList;
