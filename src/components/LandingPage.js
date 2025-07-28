// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIBQ0z321P-D5ZWi9vEO4i0TXn3AZrMITRkQ&s";

export default function LandingPage() {
  return (
    <div style={{ 
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      height: '90vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'white',
      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
    }}>
      <h1 style={{ fontSize: '3rem' }}>Paradise Nursery</h1>
      <p style={{ fontSize: '1.5rem', maxWidth: '600px' }}>
        Your premier destination for exotic houseplants since 1995. 
        We specialize in rare tropical species and expert plant care.
      </p>
      <Link to="/products">
        <button style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          background: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px'
        }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}