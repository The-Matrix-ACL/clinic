import React, { useState } from 'react';

const FamilyMemberForm = () => {
  const [formData, setFormData] = useState({
    
    Username: '',Email:'',Relation:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/addfamilymemberpatient', {
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
        type your Username here:
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
        type the patient email here:
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