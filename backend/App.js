// External variables
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
// add MONGO_URI in .env file
//Check db connection links in README file
const MongoURI = 'mongodb+srv://thematrix:thematrix@el7a2nidb.lrjz9fm.mongodb.net/?retryWrites=true&w=majority';
const {createUser, createDoctor, createAdminstrator, deleteDoctor, deleteAdminstrator, deleteUser, getDoctor,editDoctorInfo,filterByDateOrStatus,searchForPatient, getUsers, getDoctors, addPackage, updatePackage, deletePackage,addFamilyInfo,getFamilyMembers, searchForDoctor, searchForDoctorspeciality, searchForDoctordate}= require('./Controller/userController')


//App variables
const app = express();
app.use(cors());
const port = process.env.PORT || "8000";
const user = require('./Models/User');
// #Importing the userController


// configurations
// Mongo DB
mongoose.connect(MongoURI)
.then(()=>{
  console.log("MongoDB is now connected!")
// Starting server
 app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  })
})
.catch(err => console.log(err));
app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
  });

app.use(express.json())
app.post("/addUser",createUser);
app.post("/createDoctor",createDoctor);
app.post("/createAdminstrator",createAdminstrator);
app.delete("/deleteUser",deleteUser);
app.delete("/deleteDoctor",deleteDoctor);
app.delete("/deleteAdminstrator",deleteAdminstrator);
app.get("/getDocto",getDoctor);
app.put("/editDoctorInfo", editDoctorInfo);
app.get('/filterbydateorstatus',filterByDateOrStatus);
app.get("/patientsearch",searchForPatient);
app.get("/getPatients",getUsers);
app.get("/getDoctors",getDoctors);
app.post("/addPackage",addPackage);
app.put("/updatePackage",updatePackage);
app.delete("/deletePackage",deletePackage);
app.put("/addFamilyMember",addFamilyInfo);
app.get("/getFamilyMember",getFamilyMembers);
app.get("/doctorSearch",searchForDoctor);
app.get("/doctorSearchspeciality",searchForDoctorspeciality);
app.get("/doctorSearchdate",searchForDoctordate);

/*
                                                    End of your code
*/
