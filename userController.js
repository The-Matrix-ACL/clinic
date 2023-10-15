import userModel from '../Models/User.js';
import doctorModel from '../Models/Doctor.js';
import adminstratorModel from '../Models/Adminstrator.js';
import  mongoose  from 'mongoose';

const createUser = async(req,res) => {
   //add a new user to the database with 
   //Name, Email and Age

   


   const{Username,Name,Email, Password,DateOfBirth,Gender,MobileNumber,EmergencyContactFullName,EmergencyContactNumber}= req.body;
   console.log(req.body);
   try{
      const user = await userModel.create({Username,Name,Email, Password,DateOfBirth,Gender,MobileNumber,EmergencyContactFullName,EmergencyContactNumber});
      console.log(user);
      res.status(200).json(user)
   }catch(error){
      res.status(400).json({error:error.message})
   }
}

const createDoctor = async(req,res) => {
   const{Username, Name, Email, Password, DateOfBirth, HourlyRate, Hospital, EducationalBackground}= req.body;
   try{
      const doctor = await doctorModel.create({Username, Name, Email, Password, DateOfBirth, HourlyRate, Hospital, EducationalBackground});
      console.log(doctor);
      res.status(200).json(doctor)
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
      res.redirect('/createDoctor');
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
   res.status(204).send();
   

  }

const deleteUser = async (req, res) => {
   //delete a user from the database
   const Username = req.body.Username;
   const deletedUser = await userModel.findOneAndDelete({Username});
   if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();

}
  
const deleteAdminstrator = async (req, res) => {
   //delete a user from the database
   const Username = req.body.Username;
   const deletedAdminstrator = await userModel.findOneAndDelete({Username});
   if (!deletedAdminstrator) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(204).send();

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

export  {createUser,createDoctor,createAdminstrator,deleteUser,deleteDoctor,deleteAdminstrator,getDoctor};