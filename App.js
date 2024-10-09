import React from 'react';
import AppBar from './components/AppBar';   // Importing AppBar
import BatteryList from './components/BatteryList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar />   {/* Including AppBar at the top */}
      <BatteryList />
    </div>
  );
}

export default App;
