const userModel = require('../Models/User.js');
const doctorModel = require('../Models/Doctor.js');
const adminstratorModel = require('../Models/Adminstrator.js');
const  mongoose  = require('mongoose');

//var id;

const createUser = async(req,res) => {
   //add a new user to the database with 
   //Name, Email and Age

   const randomrecords = generateRandomHealthRecords();


   const{Username,Name,Email, Password,DateOfBirth,Gender,MobileNumber,EmergencyContactFullName,EmergencyContactNumber}= req.body;
   console.log(req.body);
   try{
      const user = await userModel.create({Username,Name,Email, Password,DateOfBirth,Gender,MobileNumber,EmergencyContactFullName,EmergencyContactNumber,HealthRecords:randomrecords});
      console.log(user);
      //res.status(200).json(user)
      res.redirect('/homepagePatient');
   }catch(error){
      res.status(400).json({error:error.message})
   }
}

const createDoctor = async(req,res) => {
   const{Username, Name, Email, Password, DateOfBirth, HourlyRate, Hospital, EducationalBackground,Speciality}= req.body;
   try{
      const hosRate = (HourlyRate*0.1);
      const SessionPrice = parseFloat(HourlyRate)+hosRate;
      console.log('aa');
      const Avaliable =new Date('2023-10-14');
      console.log(Avaliable);
      const doctor = await doctorModel.create({Username, Name, Email, Password, DateOfBirth, HourlyRate, Hospital, EducationalBackground,SessionPrice,Speciality,Avaliable});
      console.log(doctor);
      res.redirect('/homepageDoctor');
   }catch(error){
      res.status(400).json({error:error.message})
   }
}

const createAdminstrator = async(req,res) => {
   console.log("asdfg");
   const{Username,Password}= req.body;
   try{
      const adminstrator = await adminstratorModel.create({Username,Password});
      console.log(adminstrator);
      //res.status(200).json(adminstrator)
      console.log(adminstrator);
      //res.redirect('http://localhost:3000/filter');
   }catch(error){
      res.status(400).json({error:error.message})
   }
   
}

const deleteDoctor = async (req, res) => {
   //delete a user from the database
   const Username = req.body.Username;
   const deletedDoctor = await doctorModel.findOneAndDelete({Username});
   if (!deletedDoctor) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log("del1");
   //res.status(204).send();
   res.status(201).json({ Message:Username+ ' deleted successfully' });
   console.log("del2");

  }

const deleteUser = async (req, res) => {
   //delete a user from the database
   const Username = req.body.Username;
   const deletedUser = await userModel.findOneAndDelete({Username});
   if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(201).json({ Message:Username+ ' deleted successfully' });
    //res.status(204).send();

}
  
const deleteAdminstrator = async (req, res) => {
   //delete a user from the database
   const Username = req.body.Username;
   const deletedAdminstrator = await userModel.findOneAndDelete({Username});
   if (!deletedAdminstrator) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(201).json({ Message:Username+ ' deleted successfully' });
    //res.status(204).send();

}

const getDoctor = async (req, res) => {
   //retrieve all users from the database
   const Username = req.body.Username;
  
   const reqdoctor = await doctorModel.findOne({ Username: Username });
   if (!reqdoctor) {
      return res.status(404).json({ error: 'Doctor not found.' });
    }
   console.log(reqdoctor);
   
   res.status(200).json(reqdoctor);
   //res.status(200).json(reqdoctor);

  
}

const editDoctorInfo = async (req, res) => {
   const { Email, newHourlyRate, newHospital,newEmail} = req.body;
   const updateFields = {};
   updateFields.HourlyRate = newHourlyRate;
   updateFields.Email = newEmail;
   updateFields.Hospital = newHospital;
   const updatedDoctor = await doctorModel.findOneAndUpdate(
     {Email: Email },
     updateFields,
     { new: true }
   );
   if (!updatedDoctor) {
     return res.status(404).json({ error: 'Doctor not found' });
   }
   console.log(updatedDoctor);
   res.status(200).json(updatedDoctor);
 };


 const filterByDateOrStatus = async (req, res) => {
   //retrieve all users from the database
   const id = req.params;
   const { Date, Status } = req.body;
   try {
     let appointments = await appointments.find({
       Doctor: id,
       Date: Date,
       Status: Status,
     });
     if (!appointments) {
       appointments = await appointments.find({
         Patient: id,
         Date: Date,
         Status: Status,
       });
     }
     if (!appointments) {
       res.status(404).json({ error: "no appointments found" });
       return;
     }
     res.status(200).json(appointments);
   } catch (error) {
     res.status(500).json(error);
   }
 };

 const searchForPatient = async (req, res) => {
   var Name = req.body.Name;
   console.log(Name);
   const patient = await userModel.findOne({ Name: Name });
   console.log(patient);
   if(!patient){
     return res.status(404).json({error: 'No patient with this name was found'})
   }
   console.log(patient);
   res.status(200).json(patient);
 }

 const getUsers = async (req, res) => {
   //retrieve all users from the database
   const users = await userModel.find();
   res.status(200).json(users);
  }

  const getDoctors = async (req, res) => {
   //retrieve all users from the database
   const doctors = await doctorModel.find();
   res.status(200).json(doctors);
  }

 const filterByApp = async (req, res) => {
   const upcoming_appointments = req.query.appointments;

  const patients = await Patient.find({}).sort({
    appointments: {
      $regex: new RegExp(upcoming_appointments, 'i')
    }
  });

  res.send(patients);
 }

 function generateRandomHealthRecords() {
  const height = Math.floor(Math.random() * (200 - 150 + 1) + 150); // Random height between 150 and 200
  const bloodTypes = ['A', 'B', 'AB', 'O']; // Possible blood types
  const bloodType = bloodTypes[Math.floor(Math.random() * bloodTypes.length)]; // Random blood type
  const avgBloodPressure = Math.floor(Math.random() * (140 - 90 + 1) + 90); // Random average blood pressure between 90 and 140

  return {
    height,
    bloodType,
    avgBloodPressure,
  };
}

function generateRandomDate() {
  const startDate = new Date('2023-10-14');
  const endDate = new Date('2023-10-16');
  console.log('a');
  const timeDiff = endDate.getTime() - startDate.getTime();
  console.log(timeDiff);
  const randomTime = Math.random() * timeDiff;
  console.log(randomTime);
  const randomDate = new Date(startDate.getTime() + randomTime);
  console.log(randomDate);

  return {
    randomDate
  };
}

const addPackage = async (req, res) => {
  const { Username, HealthPackage} = req.body;
  const updateFields = {};
  updateFields.HealthPackage = HealthPackage;
  
  const updatedUser = await userModel.findOneAndUpdate(
    {Username: Username },
    updateFields,
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ error: 'User not found' });
  }
  console.log(updatedUser);
  res.status(200).json(updatedUser);
};

const updatePackage = async (req, res) => {
  const { Username, newHealthPackage} = req.body;
  const updateFields = {};
  updateFields.HealthPackage = newHealthPackage;
  
  const updatedUser = await userModel.findOneAndUpdate(
    {Username: Username },
    updateFields,
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ error: 'User not found' });
  }
  console.log(updatedUser);
  res.status(200).json(updatedUser);
};

const deletePackage = async (req, res) => {
  const Username = req.body.Username;
  //const updateFields = {};
  //updateFields.HealthPackage = newHealthPackage;
  
  const updatedUser = await userModel.findOneAndUpdate(
    {Username: Username },
    {$set :{HealthPackage:null}},
    { new: true }
  );
  if (!updatedUser) {
    return res.status(404).json({ error: 'User not found' });
  }
  console.log(updatedUser);
  res.status(200).json(updatedUser);
};

const addFamilyInfo = async (req,res) => {
  const {Username,Name,NationalID,Age,Gender,Relation}=req.body
  const {id}=req.params
  console.log(id);
  setID(id);
  try{
     const user = await userModel.findOneAndUpdate({Username:Username},{$push:{FamilyMembers:{
        Name,NationalID,Age,Gender,Relation
     }}})
     console.log(user);
     await res.status(200).json(user)
  }
  catch(err){
     console.log(err)
  }
}
const getFamilyMembers = async (req,res) => {
  const Username = req.body.Username;
  //const id2 = getID();
  try{
     const FamilyMembers = await userModel.findOne({Username:Username})
     await res.status(200).json(FamilyMembers.FamilyMembers)
  }
  catch(err){
     console.log(err)
  }
}

function setID(ID){
  id = ID;
  console.log(id);
}

function getID(){
  return(id);
}

const searchForDoctor = async (req, res) => {
  const doctorId = req.params.id;
  console.log(doctorId);
  try {
    const doctor = await doctorModel.findById(doctorId);
    console.log(doctor);
    if (!doctor) {
      return res.status(404).json({ error: 'No doctor with this id was found' });
    }

    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

const searchForDoctorspeciality = async (req, res) => {
  
  var Speciality = req.body.Speciality;
  
  console.log(Speciality);
  
  
    const patient = await doctorModel.findOne({ Speciality: Speciality });
  
  console.log(patient);
  if(!patient){
    return res.status(404).json({error: 'No doctor with this Speciality was found'})
  }
  console.log(patient);
  //res.status(201).json({ Map: 'Patient registered successfully' });
  res.status(200).json(patient);
}

const searchForDoctordate = async (req, res) => {
  
  var Avaliable = req.body.Avaliable;
  
  console.log(Avaliable);
  
  
    const patient = await doctorModel.findOne({ Avaliable: Avaliable });
  
  console.log(patient);
  if(!patient){
    return res.status(404).json({error: 'No doctor is avaliable at this time'})
  }
  console.log(patient);
  //res.status(201).json({ Map: 'Patient registered successfully' });
  res.status(200).json(patient);
}



module.exports ={createUser,createDoctor,createAdminstrator,deleteUser,deleteDoctor,deleteAdminstrator,getDoctor,editDoctorInfo,filterByDateOrStatus,searchForPatient,getUsers,getDoctors,addPackage,updatePackage,deletePackage,addFamilyInfo,getFamilyMembers,searchForDoctor,searchForDoctorspeciality,searchForDoctordate};