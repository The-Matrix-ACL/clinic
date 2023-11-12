const userModel = require('../Models/User.js');
const doctorModel = require('../Models/Doctor.js');
const adminstratorModel = require('../Models/Adminstrator.js');
const requestModel = require('../Models/Requests.js');
const  mongoose  = require('mongoose');
const fs = require('fs');
const User = require('../Models/User.js');
//const multer = require('multer');

//var id;

const createUser = async(req,res) => {
   //add a new user to the database with 
   //Name, Email and Age

   //const randomrecords = generateRandomHealthRecords();


   const{Username,Name,Email, Password,DateOfBirth,Gender,MobileNumber,EmergencyContactFullName,EmergencyContactNumber}= req.body;
   console.log(req.body);
   try{
      const user = await userModel.create({Username,Name,Email, Password,DateOfBirth,Gender,MobileNumber,EmergencyContactFullName,EmergencyContactNumber});
      console.log(user);
      //res.status(200).json(user)
      //res.redirect('/homepagePatient');
      //HealthRecords:randomrecords
   }catch(error){
      res.status(400).json({error:error.message})
   }
}

const createDoctor = async(req,res) => {
   const{Username, Name, Email, Password, DateOfBirth, HourlyRate, Hospital, EducationalBackground,Speciality,ID,MedicalLicense,MedicalDegree}= req.body;
   try{
      const hosRate = (HourlyRate*0.1);
      const SessionPrice = parseFloat(HourlyRate)+hosRate;
      console.log('aa');
      const Avaliable =new Date('2023-10-14');
      console.log(Avaliable);
      const doctor = await requestModel.create({Username, Name, Email, Password, DateOfBirth, HourlyRate, Hospital, EducationalBackground,SessionPrice,Speciality,Avaliable,ID,MedicalLicense,MedicalDegree});
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
   const id = '65296f5b5500dbdfb8cb8471';
  console.log(id)
   const reqdoctor = await doctorModel.findById(id );
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

const addHealthRecords = async(req,res) => {
  const {Username,document} = req.body;
  console.log(document);
userModel.findOneAndUpdate({Username:Username},{$push:{HealthRecords:
  document
}})
.then ((err, item) => {
    if (err) {
        console.log(err);
    }
    else {
        // item.save();
        res.status(200).json(document);
    }
});
}

const Loginuser = async(req,res) => 
{
  const {Username,Password} = req.body;
  const reqdoctor = await userModel.findOne({ Username: Username});
  //console.log(Password!==reqdoctor.Password)
 if (!(reqdoctor)|| Password!=reqdoctor.Password) {
    return res.status(404).json({ error: 'No Account With this Username and Password were found!.' });
  }
  
 console.log(reqdoctor);
 
 res.status(200).json(reqdoctor);
}

const changepassworduser = async (req, res) => {
  const { Username, Password, newPassword} = req.body;
  const updateFields = {};
  updateFields.Password = newPassword;
  
  const updatedDoctor = await userModel.findOneAndUpdate(
    {Username: Username},
    updateFields,
    { new: true }
  );
  if (!updatedDoctor) {
    return res.status(404).json({ error: 'User not found' });
  }
  console.log(updatedDoctor);
  res.status(200).json(updatedDoctor);
};

const addHealthRecord = async (req,res) => {
  const HealthRecords=req.file
  const Username = req.body.Username
  console.log("jbk")
  //console.log(id);
  //setID(id);
  try{
     const user = await userModel.findOneAndUpdate({Username:Username},{$push:{HealthRecords:{
        HealthRecords
     }}})
     console.log(user);
     await res.status(200).json(user)
  }
  catch(err){
     console.log(err)
  }
}

const resetpassword = async (req,res) => {
  const {otp,Username,newPassword} = req.body
  
  if(otp == 2421234){
    try{
      
      const updateFields = {};
    updateFields.Password = newPassword;
  
    const updated = await userModel.findOneAndUpdate(
    {Username: Username },
    updateFields,
    { new: true }
  );
  console.log(updated)
  if(!updated){
    throw new Error('Username not found')
  }
  else{
    res.status(200).json(updated)
  }
    }catch(error){
      res.status(404).json({error:"Username not found"})
    }
  }
  else{
    try{
      throw new Error('Wrong OTP')
    }catch(error){
      res.status(404).json({error:"Wrong OTP"})
    }
    }
}

const viewHealthPackages = async (req, res) => {
  try {
    const healthPackages = [
      {
        name: 'Silver Package',
        description: 'Patient pays 3600 LE per year and gets 40% off any doctors session price and 20% off any medicin ordered from pharmacy platform and 10% discount on the subscribtion of any of his family members in any package.',
        price: 3600,
      },
      {
        name: 'Gold Package',
        description: 'Patient pays 6000 LE per year and gets 60% off any doctors session price and 30% off any medicin ordered from pharmacy platform and 15% discount on the subscribtion of any of his family members in any package.',
        price: 6000,
      },
      {
        name: 'Platinum Package',
        description: 'Patient pays 9000 LE per year and gets 80% off any doctors session price and 40% off any medicin ordered from pharmacy platform and 20% discount on the subscribtion of any of his family members in any package.',
        price: 9000,
      }
    ];

    // Send the health packages as a response
    res.status(200).json(healthPackages);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}

const SubToHealthPackage = async (req, res) => {
  try {
    const healthPackagesResponse = await axios.get('http://localhost:8000/viewHealthPackages');
    const healthPackages = healthPackagesResponse.data;

    const { Username, PackageName, FamilyMembers } = req.body;

    // Retrieve the user from the database
    const user = await userModel.findOne({ Username });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user already has a health package
    if (user.HealthPackage) {
      return res.status(400).json({ error: 'User already subscribed to a health package' });
    }

    // Find the selected health package
    const selectedPackage = healthPackages.find(pkg => pkg.name === PackageName);

    if (!selectedPackage) {
      return res.status(400).json({ error: 'Invalid health package name' });
    }

    // Update the user's health package information
    const updatedUser = await userModel.findOneAndUpdate(
      { Username: Username },
      { HealthPackage: selectedPackage },
      { new: true }
    );

    // Subscribe family members to the selected health package
    if (FamilyMembers && FamilyMembers.length > 0) {
      for (const familyMember of FamilyMembers) {
        const familyMemberUser = await userModel.findOneAndUpdate(
          { Username: familyMember.Username },
          { HealthPackage: selectedPackage },
          { new: true }
        );
        
      }
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
};

const payForHealthPackage = async (req, res) => {
  try {
    const { Username, PaymentMethod } = req.body;

    // Check if the user exists
    const user = await userModel.findOne({ Username });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the user has a health package
    if (!user.HealthPackage) {
      return res.status(400).json({ error: 'User is not subscribed to any health package' });
    }

    // Implement payment logic based on the selected PaymentMethod
    if (PaymentMethod === 'cash') {
      // Handle cash payment logic
      // You might update the user's payment status or perform other actions
      // ...

      // Example: Set the payment status to 'paid'
      user.HealthPackage.paymentStatus = 'paid';
    } else if (PaymentMethod === 'credit') {
      // Handle credit card payment logic
      // You might integrate with a payment gateway or process the payment in some way
      // ...

      // Example: Set the payment status to 'paid'
      user.HealthPackage.paymentStatus = 'paid';
    } else {
      return res.status(400).json({ error: 'Invalid payment method' });
    }

    // Save the updated user with the payment information
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};





module.exports ={createUser,createDoctor,createAdminstrator,deleteUser,deleteDoctor,deleteAdminstrator,getDoctor,editDoctorInfo,filterByDateOrStatus,searchForPatient,getUsers,getDoctors,addPackage,updatePackage,deletePackage,addFamilyInfo,getFamilyMembers,searchForDoctor,searchForDoctorspeciality,searchForDoctordate,addHealthRecords,Loginuser,changepassworduser,addHealthRecord,resetpassword,viewHealthPackages,SubToHealthPackage,payForHealthPackage};