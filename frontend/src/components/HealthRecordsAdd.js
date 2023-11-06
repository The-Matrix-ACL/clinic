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
      const response = await fetch('http://localhost:8000/addHealthRecords', {
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
      <div>
          <label for="image">Upload Image</label>
          <input type="file" id="image" name="image" value={formData.obj} required />
        </div>
        
      <br />
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
      
      <button type="submit">Add Family Member</button>
    </form>
  );
};

export default FamilyMemberForm;