import React from 'react';
import logo from '../assets/logo.png'; // Replace with the path to your logo image
import './Splashscreen.css'; // Import the CSS file for styling

const Splashscreen: React.FC = () => {
  return (
    <div className="splashscreen-container">
      <img src={logo} alt="Logo" className="splashscreen-logo" />
    </div>
  );
};

export default Splashscreen;