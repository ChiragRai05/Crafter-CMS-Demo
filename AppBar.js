import React from 'react';
import './AppBar.css';

const AppBar = () => {
  return (
    <header className="app-bar">
      <div className="logo">
        <h1>Exide Care</h1>
      </div>
      <nav className="app-nav">
        <ul>
          <li>Service Booking</li>
          <li>Find Your Battery</li>
          <li>Warranty Registration</li>
          <li>Dealer Locator</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
};

export default AppBar;
