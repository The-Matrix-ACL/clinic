import React, { useState } from 'react';

const UpdateDoctorForm = () => {
  const [formData, setFormData] = useState({
    
    Username: '',Avaliable:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/addSlots', {
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
        Avaliable:
        <input type="date"  name="avaliable" value={formData.avaliable} onChange={handleChange}/>
      </label>
      <br />
      
      
      <button type="submit">Add slot</button>
    </form>
  );
};

export default UpdateDoctorForm;