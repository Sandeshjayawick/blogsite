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
        fontFamily: 'Segoe UI, sans-serif',
        animation: 'fadeIn 1s ease-in',
      }}
    >
      <div 
        style={{
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '20px',
          padding: '40px',
          maxWidth: '900px',
          textAlign: 'justify',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        }}
      >
        <p style={{ lineHeight: '1.8', margin: 0, fontSize: '1.0rem' }}>
          This digital research platform explores the intersection of cultural identity, fashion, and the global influence of Black culture—focusing on Sri Lankan boys, boys of African descent, and biracial Sri Lankan boys aged 18–25. Created as part of a final dissertation, it gathers both quantitative and qualitative data through interactive questionnaires and forum-style discussions. The goal is to understand how Afrocentric fashion is interpreted and embodied in a Sri Lankan context, revealing the emotional, social, and cultural motivations behind these choices, and examining the fine line between appreciation and appropriation.
        </p>
        <br />
        <p style={{ margin: 0, fontSize: '1rem' }}>
          <strong>Contact</strong><br />
          <strong>Email:</strong> <a href="mailto:rahyael.desilva3127@aod.lk" style={{ color: '#00acee', textDecoration: 'none' }}>rahyael.desilva3127@aod.lk</a><br />
          <strong>Phone:</strong> <a href="tel:+94701083038" style={{ color: '#00acee', textDecoration: 'none' }}>+94 70 108 3038</a><br />
          <strong>Instagram:</strong> <a href="https://www.instagram.com/screamnyael_official/" target="_blank" rel="noopener noreferrer" style={{ color: '#00acee', textDecoration: 'none' }}>@screamnyael_official</a>
        </p>
      </div>

      <Link to="/" style={{ marginTop: '20px' }}>
        <button className="button-54" role="button">Home</button>
      </Link>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Background;
