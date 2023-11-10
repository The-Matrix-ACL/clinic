import React, { useState } from 'react';

const FamilyMemberForm = () => {
  const [formData, setFormData] = useState({
    HealthRecords: null,
    Username: '',
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    // For file input, use the first file in the array
    const file = files && files.length > 0 ? files[0] : null;

    setFormData({
      ...formData,
      [name]: file ? file : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = new FormData();
      data.append('HealthRecords', formData.HealthRecords);
      window.alert(formData.HealthRecords)
      data.append('Username', formData.Username);

      const response = await fetch('http://localhost:8000/addHealthRecords', {
        method: 'POST',
        body: data,
      });

      console.log(response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Upload Document</label>
        <input type="file" name="HealthRecords" onChange={handleChange} required />
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

      <button type="submit">Add Health Records</button>
    </form>
  );
};

export default FamilyMemberForm;