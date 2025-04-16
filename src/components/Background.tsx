import React from 'react';
import { Link } from 'react-router-dom';
import screamRevealImage from '../assets/Scream reyeal.png';

const Background: React.FC = () => {
  return (
    <div 
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${screamRevealImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <div 
        style={{
          backgroundColor: 'rgba(128, 128, 128, 0.8)',
          borderRadius: '10px',
          padding: '30px',
          maxWidth: '900px',
          textAlign: 'justify',
          color: '#fff',
        }}
      >
        <p 
          style={{ 
            lineHeight: '1.6',
            margin: 0,
          }}
        >
          This digital research platform explores the intersection of cultural identity, fashion, and the global influence of Black culture—focusing on Sri Lankan boys, boys of African descent, and biracial Sri Lankan boys aged 18–25. Created as part of a final dissertation, it gathers both quantitative and qualitative data through interactive questionnaires and forum-style discussions. The goal is to understand how Afrocentric fashion is interpreted and embodied in a Sri Lankan context, revealing the emotional, social, and cultural motivations behind these choices, and examining the fine line between appreciation and appropriation.
        </p>
        <br />
        <p style={{ margin: 0 }}>
          <strong>Contact</strong><br />
          <strong>Email:</strong> <a href="mailto:rahyael.desilva3127@aod.lk" style={{ color: '#00acee', textDecoration: 'none' }}>rahyael.desilva3127@aod.lk</a><br />
          <strong>Phone:</strong> <a href="tel:+94701083038" style={{ color: '#00acee', textDecoration: 'none' }}>+94 70 108 3038</a><br />
          <strong>Instagram:</strong> <a href="https://www.instagram.com/screamnyael_official/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee', textDecoration: 'none' }}>@screamnyael_official</a>
        </p>
      </div>

      <Link to="/">
        <button className="button-54" role="button">Home</button>
      </Link>
    </div>
  );
};

export default Background;
