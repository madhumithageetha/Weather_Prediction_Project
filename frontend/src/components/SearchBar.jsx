import React, { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const quickCities = ['Salem', 'Chennai', 'Bengaluru', 'Coimbatore', 'Mumbai', 'Delhi'];

  return (
    <div>
      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="Enter city or region name (e.g., Salem, Chennai, London)..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Predicting...' : 'Get Forecast'}
        </button>
      </form>

      {/* Quick Select Pill Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8', alignSelf: 'center' }}>Popular:</span>
        {quickCities.map((c) => (
          <button
            key={c}
            onClick={() => { setCity(c); onSearch(c); }}
            style={{
              background: 'rgba(15, 23, 42, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#cbd5e1',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '0.8rem',
              cursor: 'pointer'
            }}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
