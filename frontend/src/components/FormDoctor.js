import React, { useState } from 'react';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    Username: '',
    Password: '',
    Name: '',Email: '',DateOfBirth: '',Hospital:'',HourlyRate:0,EducationalBackground:'',Speciality:'',ID:'',MedicalLicense:null,MedicalDegree:null
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    // Check if the input is a file input
    const inputValue = type === 'file' ? files[0] : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    try {
      const response = await fetch('http://localhost:8000/createDoctor', {
        method: 'POST',
        body: data
      });

      // Handle the response as needed
      console.log(response);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} encType='multipart/form-data'>
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
      <label>
        ID:
        <input
          type="text"
          name="ID"
          required
          value={formData.ID}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Medical License:
        <input
          type="file"
          name="MedicalLicense"
          required
          
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Medical Degree:
        <input
          type="file"
          name="MedicalDegree"
          required
          
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit"  onClick={() => window.alert("Submission Completed,Wating For Approval From The Adminstrator")}>Register</button>
      <a href="http://localhost:3000/logindoctor">Already have an Account</a>
    </form>
  );
};

export default DoctorForm;