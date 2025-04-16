import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import homepageImage from '../assets/home.png';
import smallScreenImage from '../images/screen2.png';
import './Homepage.css';

const Homepage: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState(homepageImage);

  useEffect(() => {
    // Function to handle screen size changes
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setBackgroundImage(smallScreenImage);
      } else {
        setBackgroundImage(homepageImage);
      }
    };

    // Set initial image based on screen size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      className="homepage-container" 
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
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