// HealthPackagesList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HealthPackagesList = () => {
  const [healthPackages, setHealthPackages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/viewHealthPackages');
        setHealthPackages(response.data);
      } catch (error) {
        console.error('Error fetching health packages:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Health Packages</h2>
      <ul>
        {healthPackages.map((pkg, index) => (
          <li key={index}>{pkg.name} - {pkg.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default HealthPackagesList;
