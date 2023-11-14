// External variables
const express = require("express");

const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const session = require('express-session');
const upload = multer();
require('dotenv').config();
// add MONGO_URI in .env file
//Check db connection links in README file
const MongoURI = 'mongodb+srv://thematrix:thematrix@el7a2nidb.lrjz9fm.mongodb.net/?retryWrites=true&w=majority';
const {createUser, createDoctor, createAdminstrator, deleteDoctor, deleteAdminstrator, deleteUser, getDoctor,editDoctorInfo,filterByDateOrStatus,searchForPatient, getUsers, getDoctors, addPackage, updatePackage, deletePackage,addFamilyInfo,getFamilyMembers, searchForDoctor, searchForDoctorspeciality, searchForDoctordate, addHealthRecords, Loginuser,changepassworduser,addHealthRecord, resetpassword, getHealthRecords, removeHealthRecords, addfamilymemberpatient, getTimeSlots, reserveTimeSlot, addavaliabletime, getWalletCredit, payWithWallet}= require('./Controller/userController')
const {Login, changepasswordadmin, acceptdoctor, getRequests, resetpasswordadmin, rejectdoc, addHealthPackage} = require('./Controller/adminController');
const {Logindoc, changepassworddoctor, resetpassworddoctor, addSlots, Followup} = require('./Controller/doctorController');

//App variables
const app = express();
app.use(cors());
const port = process.env.PORT || "8000";
const user = require('./Models/User');
app.use(session({
  secret: 'AAsdfg15',
  resave: false,
  saveUninitialized: false,
}));
// #Importing the userController
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

  const uploadFields = [
    {
      name: 'MedicalLicense'
    },
    {name: 'MedicalDegree'}
  ]
app.use(express.json())
app.post("/addUser",createUser);
app.post("/createDoctor",upload.fields(uploadFields),createDoctor);
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
app.put("/addHealthRecords",addHealthRecords);
app.post("/loginadmin",Login);
app.post("/logindoctor",Logindoc);
app.post("/loginuser",Loginuser);
app.put("/changepasswordpatient", changepassworduser);
app.put("/changepassworddoctor", changepassworddoctor);
app.put("/changepasswordadmin", changepasswordadmin);
app.post("/addHealthrecords",upload.array('HealthRecords'), addHealthRecord);
app.post("/acceptdoc", acceptdoctor);
app.post("/rejectdoc", rejectdoc);
app.get("/getRequests",getRequests);
app.put("/resetpassword",resetpassword)
app.put("/resetpassworddoctor",resetpassworddoctor)
app.put("/resetpassword",resetpasswordadmin)
app.post("/followup",Followup)
app.post("/addhealthpackage",addHealthPackage)
app.post("/gethealthrecords",getHealthRecords)
app.post("/removehealthrecords",removeHealthRecords)
app.post('/addfamilymemberpatient',addfamilymemberpatient)
app.put("/addSlots",addSlots);
app.get("/getTimeSlots/:Username",getTimeSlots);
app.post("/reserveTimeSlot",reserveTimeSlot);
app.put("/addavaliabletime",addavaliabletime);
app.post("/getWalletCredit", getWalletCredit);
app.post('/payWithWallet',payWithWallet );
app.post('/payment', async (req, res) => {
  try {
      const { amount, token } = req.body;

      const charge = await stripe.charges.create({
          amount: amount, // Amount in cents
          currency: 'usd',
          source: token,
          description: 'Test payment',
      });

      res.status(200).send({ success: charge });
  } catch (error) {
      res.status(500).send({ error: error.message });
  }
});


/*
                                                    End of your code
*/
