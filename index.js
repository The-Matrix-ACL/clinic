const React= require("react");
const  Express = require("express");
const cors= require('cors');
//import  mongoose  from "mongoose";
const ejs = require("ejs");
var bodyParser = require('body-parser')
//import Createadminstrator from './Frontend/AdminstratorForm.ejs';
//import bars from './bars'
//import './patientRegister.css';
//import './theme.css';
const mongoose = require("mongoose");
const dotenv =  require('dotenv');
const path =  require('path');
const ReactDOM = require('react-dom');
const {createUser, createDoctor, createAdminstrator, deleteDoctor, deleteAdminstrator, deleteUser, getDoctor} =require("./Routes/userController.js");

/*const React = require('react');
import ReactDOM = from'react-dom';

const express = require("express");
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();
const {createUser, createDoctor, createAdminstrator, deleteDoctor, deleteAdminstrator, deleteUser, getDoctor} = require("./Routes/userController.js");
const MongoURI = process.env.MONGO_URI ;

  const Adminstratorform = require('./Frontend/AdminstratorForm');*/

  //import Aform from './Frontend/Aform';

//Adminstratorform.call();
mongoose.set('strictQuery', false);
dotenv.config();
const MongoURI = process.env.MONGO_URI ;
const app = Express();
const port = process.env.PORT || "3000";
app.use(cors({origin: 'http://localhost:3000',  // Replace with your frontend's URL
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials: true,}));
//const __filename = new URL(import.meta.url).pathname;
//const __dirname = path.dirname(__filename); 
//const user = require('./Models/User.js');
//const createadminstrator = require('./Frontend/AdminstratorForm');
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:3000`);
  })
})
.catch(err => console.log(err));


//.............................................//

/*app.post("/home", (req, res) => {
  res.status(200).send(Createadminstrator.call());
});
const temp = '<h1>Hello <%= name %></h1>'; 
app.get('/', (req, res) => {
  const data = { name: 'World' };
  const html = ejs.render(temp, data);
  res.send(html);
});
app.set('view engine', 'ejs');

app.post('/createAdminstrator',(req,res)=>{
  res.send(ejs.render('AdminstratorForm'));
})*/

/*app.listen(3001, () => {
  console.log(' Server listening on port 3000 ');
}); */

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'Frontend'));
// #Routing to userController here
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//app.engine('html', require('ejs').renderFile);
app.use(Express.json())
app.use(Express.urlencoded({ extended: true }));

// Serving static files (like index.js)
app.use(Express.static(path.join(__dirname, 'public')));

app.get('/createAdminstrator', (req, res) => {
  res.render('AdminstratorForm',{ formData: { Username: '', Password: '' } });
});

app.get('/createDoctor', (req, res) => {
  res.render('DoctorForm',{ formData: { Username: '',Name: '',Email: '',Password: '',DateOfBirth: '',Hospital:'',HourlyRate:0,EducationalBackground:'' } });
});

app.get('/createUser', (req, res) => {
  res.render('PatientForm',{ formData: { Username: '',Name: '',Email: '',Password: '',DateOfBirth: '',Gender:'',MobileNumber:0,EmergencyContactFullName:'',EmergencyContactNumber:0 } });
});

app.get('/deleteDoctor', (req, res) => {
  res.render('DeleteDoc',{ formData: { Username: ''} });
});

app.get('/deleteAdminstrator', (req, res) => {
  res.render('DeleteAdmin',{ formData: { Username: ''} });
});

app.get('/deletePatient', (req, res) => {
  res.render('DeletePatient',{ formData: { Username: ''} });
});

app.get('/getDoctor', (req, res) => {
  res.render('getDoctor',{ formData: { Username: ''} });
});

app.get('/', (req, res) => {
  res.render('MainRegisterPage');
});

app.get('/prescriptions', (req, res) => {
  res.render('prescriptions');
});

app.get('/homepageAdmin', (req, res) => {
  res.render('homepageAdmin');
});

app.get('/homepagePatient', (req, res) => {
  res.render('homepagePatient');
});

app.post("/addUser",createUser);
app.post("/createDoctor",createDoctor);
app.post("/createAdminstrator",createAdminstrator,);
app.delete("/deleteUser",deleteUser);
app.delete("/deleteDoctor",deleteDoctor);
app.delete("/deleteAdminstrator",deleteAdminstrator);
app.get("/getDoctor",getDoctor);
//app.post("/abc",Createadminstrator);



/*ReactDOM.render(
  '<Adminstratorform />' ,
  document.getElementById('App')
);*/

/*function App(){
  const PatientRegistration = () => {
    const [formData, setFormData] = useState({
      username: '',
      name: '',
      email: '',
      password: '',
      dob: '',
      gender: '',
      mobileNumber: '',
      emergencyContact: {
        fullName: '',
        contactNumber: '',
      },
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleEmergencyContactChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        emergencyContact: { ...formData.emergencyContact, [name]: value },
      });
    };
    //var register = document.getElementById("register");
    //register.addEventListener("click", function(e){

    
    const handleSubmit = async (e) => {
      alert("consst");
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        alert("tryyy");
        if (response.ok) {
          console.log('Registration successful!');
          alert("ifff")
          // Handle success, e.g., redirect to a success page
        } else {
          console.error('Registration failed.');
          alert(response.status);
          // Handle failure, e.g., show an error message
        }
      } catch (error) {
        console.error('Error during registration:', error);
        alert("catchhh");
        // Handle network or other errors
      }
    };
  
  //});*/
    
    
/*function App(){  
    return (
      <div className="centered-form">
      <form>

       <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
  
        
        
       <label>
          name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>

      

        <label>
          email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>

        <label>
          password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>

        <label>
          Date Of Birth:
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </label>

        <label>
          Gender:
           
          <input type="radio" id ="male" name="gender" value={"male"} onChange={handleChange} />
          <label for="male">Male</label>
          <input type="radio" id ="female" name="gender" value={"female"} onChange={handleChange} />
          <label for="female">Female</label>
        </label>

        <label>
          Mobile Number:
          <input type="number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </label>
  
  
        <label>
          Emergency Contact Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.emergencyContact.fullName}
            onChange={handleEmergencyContactChange}
          />
        </label>
  
        <label>
          Emergency Contact Mobile Number:
          <input
            type="number"
            name="contactNumber"
            value={formData.emergencyContact.contactNumber}
            onChange={handleEmergencyContactChange}
          />
        </label>
  
        <button type="submit" id="register" onClick={handleSubmit}>Register</button>
      </form>
      </div>
    ); 
  
    };





export default App;*/
