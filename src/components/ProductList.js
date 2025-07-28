// src/components/ProductList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

// Sample product data
const products = [
  { id: 1, name: "Snake Plant", price: 25.99, category: "Beginner Friendly", image: "snake-plant.jpg" },
  { id: 2, name: "Monstera Deliciosa", price: 39.99, category: "Tropical", image: "monstera.jpg" },
  { id: 3, name: "Fiddle Leaf Fig", price: 45.99, category: "Statement Plants", image: "fiddle-leaf.jpg" },
  { id: 4, name: "Pothos", price: 18.99, category: "Trailing Plants", image: "pothos.jpg" },
  { id: 5, name: "ZZ Plant", price: 29.99, category: "Low Light", image: "zz-plant.jpg" },
  { id: 6, name: "Cactus Set", price: 34.99, category: "Succulents", image: "cactus.jpg" },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  // Group products by category
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Our Plants</h1>
      
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {products
              .filter(product => product.category === category)
              .map(product => (
                <div key={product.id} style={{
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  padding: '15px',
                  width: '250px',
                  textAlign: 'center'
                }}>
                  <div style={{ height: '150px', backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ fontSize: '3rem' }}>🌿</div>
                  </div>
                  <h3>{product.name}</h3>
                  <p>${product.price.toFixed(2)}</p>
                  <button 
                    onClick={() => dispatch(addToCart(product))}
                    disabled={cart.some(item => item.id === product.id)}
                    style={{
                      padding: '8px 15px',
                      background: cart.some(item => item.id === product.id) ? '#ccc' : '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: cart.some(item => item.id === product.id) ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {cart.some(item => item.id === product.id) ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}