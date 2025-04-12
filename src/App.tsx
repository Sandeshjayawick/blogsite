import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Background from './components/Background';
import Splashscreen from './components/Splashscreen';
import Footer from './components/Footer'; // Import the Footer component

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Show the splash screen for 3 seconds
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <Router>
      {showSplash ? (
        <Splashscreen />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/background" element={<Background />} />
          </Routes>
          <Footer /> {/* Add the Footer component here */}
        </>
      )}
    </Router>
  );
};

export default App;