import React from 'react';

const SevenDayForecast = ({ forecastList }) => {
  if (!forecastList || forecastList.length === 0) return null;

  return (
    <div className="weather-card">
      <div className="card-title">Extended 7-Day Forward Forecast</div>
      <div className="forecast-strip">
        {forecastList.map((day, idx) => (
          <div key={idx} className="forecast-col">
            <div className="forecast-day">{day.dayName.substring(0, 3)}</div>
            <div className="forecast-date">{day.date}</div>
            <div className="forecast-icon">{day.icon}</div>
            <div className="forecast-high">{Math.round(day.maxTemp)}°</div>
            <div className="forecast-low">{Math.round(day.minTemp)}°</div>
            <div className="rain-chance">💧 {day.rainProbability}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SevenDayForecast;
