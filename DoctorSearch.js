import React, { useState, useEffect } from 'react';

function DoctorSearch() {
  const [searchCriteria, setSearchCriteria] = useState({
    name: '',
    speciality: '',
  });

  const [doctors, setDoctors] = useState([]);

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  }

  const handleSearch = async () => {
    try {
      const query = new URLSearchParams(searchCriteria).toString();

      const response = await fetch(`/api/doctors?${query}`); // Replace with actual API endpoint

      if (response.ok) {
        const data = await response.json();
        setDoctors(data);
      } else {
        console.error('Failed to search for doctors');
      }
    } catch (error) {
      console.error('An error occurred while searching for doctors:', error);
    }
  }

  return (
    <div>
      <h2>Doctor Search</h2>
      <div>
        {/* Search input fields and button */}
        <input
          type="text"
          name="name"
          placeholder="Doctor Name"
          value={searchCriteria.name}
          onChange={handleSearchChange}
        />
        <input
          type="text"
          name="speciality"
          placeholder="Speciality"
          value={searchCriteria.speciality}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {/* Display search results */}
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            {/* Display doctor information */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorSearch;
