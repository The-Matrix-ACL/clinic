const adminstratorModel = require('../Models/Adminstrator.js');
const requestModel = require('../Models/Requests.js');
const doctorModel = require('../Models/Doctor.js');
const  mongoose  = require('mongoose');
const healthPackageModel = require('../Models/HealthPackage.js');

const Login = async(req,res) => 
{
  const {Username,Password} = req.body;
  const reqdoctor = await adminstratorModel.findOne({ Username: Username});
  //console.log(Password!==reqdoctor.Password)
 if (!(reqdoctor)|| Password!=reqdoctor.Password) {
    return res.status(404).json({ error: 'No Account With this Username and Password were found!.' });
  }
  
 console.log(reqdoctor);
 
 res.status(200).json(reqdoctor);
}

const changepasswordadmin = async (req, res) => {
    const { Username, Password, newPassword} = req.body;
    const updateFields = {};
    updateFields.Password = newPassword;
    
    const updatedDoctor = await adminstratorModel.findOneAndUpdate(
      {Username: Username },
      updateFields,
      { new: true }
    );
    if (!updatedDoctor) {
      return res.status(404).json({ error: 'User not found' });
    }
    console.log(updatedDoctor);
    res.status(200).json(updatedDoctor);
  };

  const getRequests = async (req, res) => {
    //retrieve all users from the database
    const doctors = await requestModel.find();
    res.status(200).json(doctors);
   }

  const acceptdoctor = async (req,res) => {
    const userId = req.query.userId;
    console.log(userId)
    // check if userId is not empty
    if(userId){
    const result = await  requestModel.findOne({_id:userId});
    console.log(result+"csd")
    const doctor = await doctorModel.create({Username:result.Username, Name:result.Name, Email:result.Email, Password:result.Password,DateOfBirth: result.DateOfBirth, HourlyRate:result.HourlyRate, Hospital:result.Hospital,EducationalBackground: result.EducationalBackground,SessionPrice:result.SessionPrice,Speciality:result.Speciality,Avaliable:result.Avaliable,ID:result.ID,MedicalLicense:result.MedicalLicense,MedicalDegree:result.MedicalDegree});
    console.log(doctor + "abc")
    await requestModel.findOneAndRemove({_id:userId})
    res.status(200).json(doctor)
    }else{
        res.status(400).json({error:"userId is required"})
    }
    //await doctorModel.create(result)
    //res.status(200).json(accepteddoc);
  }

  const rejectdoc = async (req,res) => {
    const userId = req.query.userId
    console.log(userId)
    if(userId){
      const result = await requestModel.findOneAndRemove({_id:userId})
      res.status(200).json(result)
    }
    else{
      res.status(404).json({error:"userId is required"})
    }
  }

  const resetpasswordadmin = async (req,res) => {
    const {otp,Username,newPassword} = req.body
    
    if(otp == 2421234){
      try{
        
        const updateFields = {};
      updateFields.Password = newPassword;
    
      const updated = await adminstratorModel.findOneAndUpdate(
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

  const addHealthPackage = async (req, res) => {
    const { packageName} = req.body;
  
    try {
      // Create a new health package
      const healthPackage = await healthPackageModel.create({
        
        description: description
        
      });
  
      res.status(200).json(healthPackage);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  };


module.exports = {Login,changepasswordadmin,acceptdoctor,rejectdoc,getRequests,resetpasswordadmin,addHealthPackage};