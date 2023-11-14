// HealthPackages.js
import React, { useEffect, useState } from 'react';

function HealthPackages() {
  const [healthPackages, setHealthPackages] = useState([]);
  const [healthPackageStatus, setHealthPackageStatus] = useState('');

  useEffect(() => {
    fetchHealthPackages();
    fetchHealthPackageStatus();
  }, []);

  async function fetchHealthPackages() {
    // Replace 'your-api-endpoint' with the actual URL where your backend is hosted.
    const apiEndpoint = '/api/patient/health-packages?Username=your-username';

    try {
      const response = await fetch(apiEndpoint, { method: 'GET' });
      const healthPackages = await response.json();
      setHealthPackages(healthPackages);
    } catch (error) {
      console.error('Error fetching health packages:', error);
    }
  }

  async function fetchHealthPackageStatus() {
    // Replace 'your-api-endpoint' with the actual URL where your backend is hosted.
    const apiEndpoint = '/api/patient/health-package-status?Username=your-username';

    try {
      const response = await fetch(apiEndpoint, { method: 'GET' });
      const status = await response.json();
      setHealthPackageStatus(status);
    } catch (error) {
      console.error('Error fetching health package status:', error);
    }
  }

  return (
    <div>
      <h2>Subscribed Health Packages</h2>
      <ul>
        {healthPackages.map((package, index) => (
          <li key={index}>{package}</li>
        ))}
      </ul>

      <h2>Health Package Status</h2>
      <p>{`Status: ${healthPackageStatus}`}</p>
    </div>
  );
}

export default HealthPackages;
