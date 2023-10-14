import React, { useState } from 'react';

function DoctorFilter() {
  const [filterCriteria, setFilterCriteria] = useState({
    speciality: '',
    date: '',
    time: '',
  });
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleFilterChange = (e) => {
    
    const { name, value } = e.target;
    setFilterCriteria({ ...filterCriteria, [name]: value });
  };

  const handleFilter = async () => {
    try {
      const response = await fetch(`/api/doctors/filter?speciality=${filterCriteria.speciality}&date=${filterCriteria.date}&time=${filterCriteria.time}`); // Replace with  actual API endpoint

      if (response.ok) {
        const data = await response.json();
        setFilteredDoctors(data);
      } else {
        console.error('Failed to filter doctors');
      }
    } catch (error) {
      console.error('An error occurred while filtering doctors:', error);
    }
  };

  return (
    <div>
      <h2>Filter Doctors</h2>
      <div>
        {/* Filter input fields and button */}
        <input
          type="text"
          name="speciality"
          placeholder="Speciality"
          value={filterCriteria.speciality}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="date"
          placeholder="Date"
          value={filterCriteria.date}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="time"
          placeholder="Time"
          value={filterCriteria.time}
          onChange={handleFilterChange}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div>
        {/* Display filtered results */}
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id}>
            {/* Display filtered doctor information */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorFilter;
