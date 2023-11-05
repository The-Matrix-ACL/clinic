import React, { useState } from 'react';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
    Name: '',Email: '',DateOfBirth: '',Hospital:'',HourlyRate:0,EducationalBackground:'',Speciality:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/createDoctor', {
        method: 'POST',
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
        Username:
        <input
          type="text"
          name="Username"
          required
          value={formData.Username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          name="Name"
          required
          value={formData.Name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type='email'
          name="Email"
          required
          value={formData.Email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date Of Birth:
        <input
          type="date"
          name="DateOfBirth"
          required
          value={formData.DateOfBirth}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="Password"
          required
          value={formData.Password}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hospital:
        <input
          type="text"
          name="Hospital"
          required
          value={formData.Hospital}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hourly Rate:
        <input
          type="number"
          name="HourlyRate"
          required
          value={formData.HourlyRate}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Educational Background:
        <input
          type="text"
          name="EducationalBackground"
          required
          value={formData.EducationalBackground}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Speciality:
        <input
          type="text"
          name="Speciality"
          required
          value={formData.Speciality}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit"  onClick={() => window.location.href=`/homepageDoctor`}>Register</button>
    </form>
  );
};

export default DoctorForm;