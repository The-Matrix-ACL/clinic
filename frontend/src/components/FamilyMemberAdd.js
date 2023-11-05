
import React, { useState } from 'react';

const FamilyMemberForm = () => {
  const [formData, setFormData] = useState({
    
    Username: '',Name:'',NationalID:0,Age:0,Gender:'',Relation:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/addFamilyMember', {
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
        National ID:
        <input
          type='number'
          name="NationalID"
          required
          value={formData.NationalID}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="text"
          name="Age"
          required
          value={formData.Age}
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
        Relation:
        <input
          type="text"
          name="Relation"
          required
          value={formData.Relation}
          onChange={handleChange}
        />
      </label>
      <br />
      
      <button type="submit">Add Family Member</button>
    </form>
  );
};

export default FamilyMemberForm;