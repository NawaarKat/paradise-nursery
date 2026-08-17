import React, { useState } from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  // Estado para controlar si mostramos la pantalla de inicio o la tienda
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="App">
      {!showProducts ? (
        /* Pantalla de inicio (Landing Page) */
        <div className="landing-page">
          <h1>Paradise Nursery</h1>
          
          {/* Aquí importamos el componente de la Tarea 2 */}
          <AboutUs />
          
          <button className="get-started-btn" onClick={handleGetStarted}>
            Comenzar
          </button>
        </div>
      ) : (
        /* Pantalla de la tienda (Se construirá en la Tarea 6) */
        <div>
          <h2>Aquí irá la lista de plantas...</h2>
        </div>
      )}
    </div>
  );
}

export default App;