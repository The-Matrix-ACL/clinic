import React, { useState } from 'react';
//import { useHistory } from 'react-router';
//import { ImgHTMLAttributes } from 'react';
import './theme.css';
const AdminstratorForm = () => {
   // const history = useHistory();
 
    const [formData, setFormData] = useState({
    Username: '',
    Password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    

    try {
      const response = await fetch('http://localhost:8000/loginpatient', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
      console.log(response);
      //history.push('/filter');
      //window.location.href="http://localhost:8000/createAdminstrator"
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    event.preventDefault();
  };

  return (
    
    <><form action="/loginpatient" onSubmit={handleSubmit}>
          <label>
              Username:
              <input
                  type="text"
                  name="Username"
                  required
                  value={formData.Username}
                  onChange={handleChange} />
          </label>
          <br />
          <label>
              Password:
              <input
                  type="password"
                  name="Password"
                  required
                  value={formData.Password}
                  onChange={handleChange} />
          </label>
          <br />

          <button type="submit" onClick={() => window.location.href=`/homepagePatient`}>Login</button>
      </form><img src="./acllogo.png"alt="logo" width="150px" height="80px"></img></>
  );
};

export default AdminstratorForm;