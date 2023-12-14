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
    event.preventDefault();

    try {
        
        const response = await fetch('http://localhost:8000/logindoctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Handle the response as needed
      console.log(response);
      //window.alert(response);
      //history.push('/filter');
      const responseData = await response.json();
      const {docid} = responseData;
      
      if(response.ok){
        window.alert("Login Successful");
        window.location.href = `/Contract?docid=${docid}`
      }
      else{
        window.alert("There is no dotor in the system with those username and password");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
    
  };

  return (
    
    <>
    
    {/* Header */}
    <div style={{ backgroundColor: '#4584ff', width: '100%', padding: '10px', display: 'flex', alignItems: 'center' }}>
    <img src="acllogo.png" alt="Logo" style={{ marginRight: '10px' ,width:'200px'}} />
    <h1>El7a2ni Clinic</h1>
    </div>
    <>
    <form  onSubmit={handleSubmit}>
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

          <button type="submit" >Login</button>
          <a href="http://localhost:3000/emaildoctor">Forgot Your Password?</a>
      </form><img src="./acllogo.png"alt="logo" width="150px" height="80px"></img>
      </>
       {/* Footer */}
    <div style={{ backgroundColor: '#4584ff', width: '100%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',bottom:'1000px' }}>
        <img src="acllogo.png" alt="Footer Logo" style={{ marginRight: '10px' ,width:'200px'}} />
        <p style={{ marginRight: '10px',left:'-1000px'}}>© el7a2ni clinics and pharmacy 2023</p>
      </div>
      
      </>
  );
};

export default AdminstratorForm;