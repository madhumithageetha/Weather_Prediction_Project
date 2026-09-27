import React from 'react';

const CurrentWeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="dashboard-grid">
      {/* Real-time Observed Conditions */}
      <div className="weather-card">
        <div className="card-title">Current Observations • {weather.cityName}, {weather.country}</div>
        
        <div className="temp-huge">
          {Math.round(weather.currentTemperature)}
          <span className="temp-unit">°C</span>
        </div>

        <div className="condition-tag">
          {weather.weatherCondition} • Feels like {Math.round(weather.feelsLike)}°C
        </div>

        <div className="metrics-grid">
          <div className="metric-box">
            <div className="metric-label">Relative Humidity</div>
            <div className="metric-value">{weather.humidity}%</div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Wind Velocity</div>
            <div className="metric-value">{Math.round(weather.windSpeed)} km/h</div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Barometric Pressure</div>
            <div className="metric-value">{Math.round(weather.pressure)} hPa</div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Cloud Coverage</div>
            <div className="metric-value">{weather.cloudCover}%</div>
          </div>
        </div>
      </div>

      {/* Machine Learning Model Prediction Output */}
      <div className="weather-card" style={{ borderLeft: '4px solid #3b82f6' }}>
        <div className="card-title" style={{ color: '#60a5fa' }}>
          🤖 ML Algorithm Forecast (Next 24h)
        </div>

        <div className="temp-huge" style={{ color: '#93c5fd' }}>
          {weather.tomorrowPredictedTemp}
          <span className="temp-unit">°C</span>
        </div>

        <div className="condition-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7' }}>
          Summary: {weather.tomorrowWeatherSummary}
        </div>

        <div className="metrics-grid">
          <div className="metric-box">
            <div className="metric-label">Rain Likelihood</div>
            <div className="metric-value" style={{ color: weather.tomorrowRainProbability > 50 ? '#60a5fa' : '#f8fafc' }}>
              {weather.tomorrowRainProbability}%
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Model Confidence</div>
            <div className="metric-value" style={{ color: '#34d399' }}>
              {(weather.modelConfidenceScore * 100).toFixed(0)}%
            </div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Predictor Engine</div>
            <div className="metric-value" style={{ fontSize: '0.9rem' }}>RandomForest Ensemble</div>
          </div>
          <div className="metric-box">
            <div className="metric-label">Database Sync</div>
            <div className="metric-value" style={{ fontSize: '0.85rem', color: '#a7f3d0' }}>MySQL Cached</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
