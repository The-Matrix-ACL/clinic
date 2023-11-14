import React, { useState } from 'react';

const UpdateDoctorForm = () => {
  const [formData, setFormData] = useState({
    
    Email: '',newEmail:'',newHospital:'',newHourlyRate:0 
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/editDoctorInfo', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
      console.log(response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="Email"
          required
          value={formData.Email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        New Email:
        <input
          type="email"
          name="newEmail"
          required
          value={formData.newEmail}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        New Hospital:
        <input
          type='text'
          name="newHospital"
          required
          value={formData.newHospital}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        New Hourly Rate:
        <input
          type="number"
          name="newHourlyRate"
          required
          value={formData.newHourlyRate}
          onChange={handleChange}
        />
      </label>
      <br />
      
      <button type="submit">Update info</button>
    </form>
  );
};

export default UpdateDoctorForm;