// src/components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const cart = useSelector(state => state.cart);
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const location = useLocation();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      background: '#2E7D32',
      color: 'white',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Paradise Nursery</div>
      
      <nav>
        <Link to="/" style={{
          margin: '0 15px',
          color: location.pathname === '/' ? '#FFD700' : 'white',
          textDecoration: 'none'
        }}>Home</Link>
        
        <Link to="/products" style={{
          margin: '0 15px',
          color: location.pathname === '/products' ? '#FFD700' : 'white',
          textDecoration: 'none'
        }}>Products</Link>
      </nav>
      
      <Link to="/cart" style={{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textDecoration: 'none'
      }}>
        <span style={{ marginRight: '5px', fontSize: '1.2rem' }}>🛒</span>
        <span style={{
          background: 'red',
          borderRadius: '50%',
          width: '40px',
          height: '20px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem'
        }}>
          {itemCount}
        </span>
      </Link>
    </header>
  );
}