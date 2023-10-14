import React, { useState, useEffect } from 'react';

function DoctorDetails({ match }) {
  const doctorId = match.params.doctorId;
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctorDetails = async () => {
      try {
        const response = await fetch(`/api/doctors/${doctorId}`); // Replace with actual API endpoint

        if (response.ok) {
          const data = await response.json();
          setDoctor(data);
        } else {
          console.error('Failed to fetch doctor details');
        }
      } catch (error) {
        console.error('An error occurred while fetching doctor details:', error);
      }
    };

    fetchDoctorDetails();
  }, [doctorId]);

  return (
    <div>
      <h2>Doctor Details</h2>
      {doctor ? (
        <div>
          <h3>Name: {doctor.name}</h3>
          <p>Speciality: {doctor.speciality}</p>
          {/* Add other doctor details*/}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DoctorDetails;
