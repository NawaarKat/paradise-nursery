import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      {!showProducts ? (
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          
          <AboutUs />
          
          <button className="get-started-btn" onClick={handleGetStarted}>
            Comenzar
          </button>
        </div>
      ) : (
        <div>
          <h2>Aquí irá la lista de plantas...</h2>
        </div>
      )}
    </div>
  );
}

export default App;