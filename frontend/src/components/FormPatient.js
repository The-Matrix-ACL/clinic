import React, { useState } from 'react';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
    Name: '',Email: '',DateOfBirth: '',Gender:'',MobileNumber:0,EmergencyContactFullName:'',EmergencyContactNumber:0
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/addUser', {
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
        Gender:
        <input
          type="text"
          name="Gender"
          required
          value={formData.Gender}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Mobile Number:
        <input
          type="number"
          name="MobileNumber"
          required
          value={formData.MobileNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Emergency Contact Full Name:
        <input
          type="text"
          name="EmergencyContactFullName"
          required
          value={formData.EmergencyContactFullName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
      Emergency Contact Number:
        <input
          type="number"
          name="EmergencyContactNumber"
          required
          value={formData.EmergencyContactNumber}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit"  onClick={() => window.location.href=`/homepagePatient`}>Register</button>
    </form>
  );
};

export default PatientForm;