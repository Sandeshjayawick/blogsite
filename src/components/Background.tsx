import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import screamRevealImage from '../assets/Scream reyeal.png'; // Import the image

const Background: React.FC = () => {
  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${screamRevealImage})`, // Set the background image
        backgroundSize: 'cover', // Ensure the image covers the entire container
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Prevent tiling
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px', // Add padding for better readability
        textAlign: 'center', // Center-align the text
        color: '#fff', // Ensure the text is readable on the background
      }}
    >
      {/* Gray container for the paragraph */}
      <div 
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.8)', // Gray background with transparency
          borderRadius: '10px', // Rounded corners
          padding: '30px', // Padding inside the container
          maxWidth: '900px', // Limit the width of the container
          textAlign: 'justify', // Justify the text for better readability
          color: '#fff', // Ensure the text is readable
        }}
      >
        <p 
          style={{ 
            lineHeight: '1.6', // Improve text spacing
            margin: 0, // Remove default margin
          }}
        >
          This project is a digital research platform created to explore the intersection of cultural identity, fashion, and the global influence of Black culture—specifically through the lens of Sri Lankan boys, boys of African descent, and biracial Sri Lankan boys aged 18–25. As part of a final dissertation, this space collects both quantitative and qualitative data while building a community that reflects on the emotional, social, and cultural motivations behind adopting Afrocentric fashion tropes. Through interactive questionnaires and open forum-style focus group discussions, this platform unpacks how Black culture is interpreted, embodied, and reimagined in a Sri Lankan context. It aims to go beyond surface-level aesthetics and uncover the deeper narratives behind identity formation, cultural resonance, and the blurred lines between appreciation and appropriation.
        </p>
      </div>

      {/* Button to go back to the homepage */}
      <Link to="/">
        <button className="button-54" role="button">Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Background;