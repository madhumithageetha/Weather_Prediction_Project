import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ForecastChart = ({ forecastList }) => {
  if (!forecastList || forecastList.length === 0) return null;

  const labels = forecastList.map((f) => `${f.dayName.substring(0, 3)} (${f.date})`);
  const maxTemps = forecastList.map((f) => f.maxTemp);
  const minTemps = forecastList.map((f) => f.minTemp);
  const rainChances = forecastList.map((f) => f.rainProbability);

  const data = {
    labels,
    datasets: [
      {
        label: 'Max Temperature (°C)',
        data: maxTemps,
        borderColor: '#f59e0b',
        backgroundColor: 'rgba(245, 158, 11, 0.15)',
        fill: true,
        tension: 0.35,
        yAxisID: 'y'
      },
      {
        label: 'Min Temperature (°C)',
        data: minTemps,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.05)',
        fill: false,
        tension: 0.35,
        yAxisID: 'y'
      },
      {
        label: 'Rain Probability (%)',
        data: rainChances,
        borderColor: '#06b6d4',
        borderDash: [5, 5],
        fill: false,
        tension: 0.2,
        yAxisID: 'y1'
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#cbd5e1'
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: { display: true, text: 'Temperature (°C)', color: '#f59e0b' },
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255, 255, 255, 0.05)' }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        min: 0,
        max: 100,
        title: { display: true, text: 'Precipitation Chance (%)', color: '#06b6d4' },
        ticks: { color: '#94a3b8' },
        grid: { drawOnChartArea: false }
      }
    }
  };

  return (
    <div className="chart-card">
      <div className="card-title">7-Day Meteorological Trend (Chart.js Visualization)</div>
      <div style={{ height: '320px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default ForecastChart;
