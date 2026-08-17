import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plantsData = [
  {
    category: "Suculentas",
    plants: [
      { name: "Aloe Vera", price: 15, image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200" },
      { name: "Cactus", price: 10, image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=200" }
    ]
  },
  {
    category: "Helechos",
    plants: [
      { name: "Helecho de Boston", price: 20, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200" },
      { name: "Helecho Nido de Ave", price: 22, image: "https://images.unsplash.com/photo-1620127807580-2a07d4b47eb0?w=200" }
    ]
  },
  {
    category: "Purificadoras",
    plants: [
      { name: "Lengua de Suegra", price: 18, image: "https://images.unsplash.com/photo-1593482892290-f54927ae1b7e?w=200" },
      { name: "Poto", price: 12, image: "https://images.unsplash.com/photo-1612363148951-15f16817648f?w=200" }
    ]
  }
];

const ProductList = ({ onHomeClick, onCartClick }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: '#4CAF50', color: 'white' }}>
        <h3 style={{ cursor: 'pointer', margin: 0 }} onClick={onHomeClick}>Inicio</h3>
        <h3 style={{ margin: 0 }}>Plantas</h3>
        <h3 style={{ cursor: 'pointer', margin: 0 }} onClick={onCartClick}>
          Carrito ({totalItems})
        </h3>
      </nav>

      <div style={{ padding: '20px' }}>
        {plantsData.map((categoryData, index) => (
          <div key={index}>
            <h2 style={{ textAlign: 'center', marginTop: '20px' }}>{categoryData.category}</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              {categoryData.plants.map((plant, pIndex) => {
                const isAdded = cartItems.some(item => item.name === plant.name);
                return (
                  <div key={pIndex} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '250px' }}>
                    <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '5px' }} />
                    <h3>{plant.name}</h3>
                    <p>${plant.price}</p>
                    <button 
                      onClick={() => handleAddToCart(plant)} 
                      disabled={isAdded}
                      style={{ 
                        padding: '10px 20px', 
                        backgroundColor: isAdded ? '#888' : '#4CAF50', 
                        color: 'white', 
                        border: 'none', 
                        borderRadius: '5px', 
                        cursor: isAdded ? 'not-allowed' : 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      {isAdded ? "Agregado" : "Agregar al Carrito"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;