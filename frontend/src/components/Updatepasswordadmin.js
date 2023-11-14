import React, { useState } from 'react';

const UpdateDoctorForm = () => {
  const [formData, setFormData] = useState({
    
    Username: '',Password:'',newPassword:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/changepasswordadmin', {
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
        New Password:
        <input type="password" id="pass" name="newPassword" value={formData.newPassword} onChange={handleChange} pattern="{8,}" title="Must contain at least 8 or more characters"/>
      </label>
      <br />
      
      
      <button type="submit">Update Password</button>
    </form>
  );
};

export default UpdateDoctorForm;