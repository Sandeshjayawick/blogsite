import React from 'react';
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
      <div style={{ display: 'flex', gap: '20px', marginTop: '520px' }}>
        <button className="button-54" role="button">Background</button>
        <button className="button-54" role="button">Form</button>
        <button className="button-54" role="button">Blog</button>
      </div>
    </div>
  );
};

export default Homepage;