import React from 'react';
import { Link } from 'react-router-dom';
import homepageImage from '../assets/home.png';
import './Homepage.css'; // Import the CSS file

interface HomepageProps {
  // You can add any props you need here
}

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div 
      className="homepage-container" 
      style={{
        backgroundImage: `url(${homepageImage})`,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat', // Prevents tiling
        width: '100vw',
        minHeight: '100vh', // Ensures the container is at least the height of the viewport
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