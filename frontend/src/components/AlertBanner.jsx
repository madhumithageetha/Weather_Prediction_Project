import React from 'react';

const AlertBanner = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div style={{ marginBottom: '20px' }}>
      {alerts.map((alert, index) => {
        const isSevere = alert.severity === 'Severe' || alert.severity === 'Warning';
        const bannerClass = isSevere ? 'alert-banner alert-danger' : 'alert-banner alert-warning';
        const icon = isSevere ? '⚠️' : 'ℹ️';

        return (
          <div key={index} className={bannerClass}>
            <span style={{ fontSize: '1.4rem' }}>{icon}</span>
            <div>
              <strong>{alert.alertType} ({alert.severity}):</strong> {alert.message}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlertBanner;
