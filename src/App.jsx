import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';

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

  const handleContinueShopping = () => {
    setShowCart(false);
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
        <CartItem onContinueShopping={handleContinueShopping} />
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