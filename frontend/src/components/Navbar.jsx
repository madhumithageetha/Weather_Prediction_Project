import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
        <span style={{ fontSize: '1.6rem' }}>⛅</span>
        <span>Weather Prediction System</span>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Spring Boot + React + MySQL</span>
        <button 
          style={{
            padding: '8px 16px',
            background: 'rgba(59, 130, 246, 0.2)',
            border: '1px solid #3b82f6',
            color: '#93c5fd',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.85rem'
          }}
          onClick={() => alert("Connected to Backend Service: http://localhost:8080")}
        >
          API Status: Online
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
