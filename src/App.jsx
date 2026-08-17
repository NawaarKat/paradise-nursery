import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';

function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
    setShowCart(false);
  };

  const handleHomeClick = () => {
    setShowProducts(false);
    setShowCart(false);
  };

  const handleCartClick = () => {
    setShowCart(true);
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
      ) : showCart ? (
        <div>
          <h2>Vista del Carrito (La construiremos en la Tarea 7)</h2>
        </div>
      ) : (
        <ProductList 
          onHomeClick={handleHomeClick} 
          onCartClick={handleCartClick} 
        />
      )}
    </div>
  );
}

export default App;