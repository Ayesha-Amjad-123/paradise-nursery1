// src/components/ShoppingCart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  incrementQuantity, 
  decrementQuantity, 
  removeItem 
} from '../redux/cartSlice';

export default function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div style={{ textAlign: 'center', margin: '40px 0' }}>
          <p style={{ fontSize: '1.2rem' }}>Your cart is empty</p>
          <Link to="/products">
            <button style={{
              padding: '10px 20px',
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '15px'
            }}>
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div style={{ 
            background: '#f9f9f9', 
            padding: '15px', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}>
            <h2>Total Items: {totalItems}</h2>
            <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          </div>
          
          {cart.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              borderBottom: '1px solid #eee',
              padding: '15px 0',
              gap: '20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px'
              }}>
                <div style={{ fontSize: '2rem' }}>🌿</div>
              </div>
              
              <div style={{ flex: 1 }}>
                <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                <p style={{ margin: '0 0 5px 0' }}>${item.price.toFixed(2)} each</p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button 
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    style={{
                      padding: '5px 10px',
                      background: '#f44336',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    -
                  </button>
                  <span style={{ margin: '0 10px', fontSize: '1.1rem' }}>{item.quantity}</span>
                  <button 
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    style={{
                      padding: '5px 10px',
                      background: '#4CAF50',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{
                    padding: '5px 10px',
                    background: '#ff9800',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginTop: '30px',
            gap: '10px'
          }}>
            <Link to="/products" style={{ flex: 1 }}>
              <button style={{
                padding: '12px',
                background: '#2196F3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                width: '100%'
              }}>
                Continue Shopping
              </button>
            </Link>
            
            <button 
              onClick={() => alert("Checkout feature coming soon!")}
              style={{
                padding: '12px',
                background: '#9C27B0',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                flex: 1
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}