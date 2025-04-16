import React from 'react';
import { Link } from 'react-router-dom';
import homepageImage from '../assets/home.png';
import './Homepage.css'; // Import the CSS file

const Homepage: React.FC = () => {
  return (
    <div 
      className="homepage-container" 
      style={{
        backgroundImage: `url(${homepageImage})`,
        backgroundRepeat: 'no-repeat', // Prevents tiling
        backgroundSize: 'contain', // Ensures the image scales to fit the container
        backgroundPosition: 'center', // Centers the image
        width: '100vw', // Full width of the viewport
        height: '100vh', // Full height of the viewport
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', gap: '20px', marginBottom: '450px' }}>
        {/* Link to the Background page */}
        <Link to="/background">
          <button className="button-54" role="button">Background</button>
        </Link>

        {/* Link to the Google Form */}
        <a 
          href="https://docs.google.com/forms/d/1IxVPIchm81OL_R7bBeWWOYK6I9cXw19As0upA23C4yw/edit" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="button-54" role="button">Form</button>
        </a>

        {/* Placeholder for Blog button */}
        <button className="button-54" role="button">Blog</button>

        <Link to="/gallery">
          <button className="button-54" role="button">Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;