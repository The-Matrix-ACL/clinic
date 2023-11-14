const adminstratorModel = require('../Models/Doctor.js');
const  mongoose  = require('mongoose');
const doctorModel = require('../Models/Doctor.js');
const userModel = require('../Models/User.js');

const Logindoc = async(req,res) => 
{
    const {Username,Password} = req.body;
    const reqdoctor = await doctorModel.findOne({ Username: Username});
    //console.log(Password!==reqdoctor.Password)
   if (!(reqdoctor)|| Password!=reqdoctor.Password) {
      return res.status(404).json({ error: 'No Account With this Username and Password were found!.' });
    }
    
   console.log(reqdoctor);
   
    res.status(200).json(reqdoctor);
}

const changepassworddoctor = async (req, res) => {
    const { Username, Password, newPassword} = req.body;
    const updateFields = {};
    updateFields.Password = newPassword;
    
    const updatedDoctor = await doctorModel.findOneAndUpdate(
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

  const resetpassworddoctor = async (req,res) => {
    const {otp,Username,newPassword} = req.body
    
    if(otp == 2421234){
      try{
        
        const updateFields = {};
      updateFields.Password = newPassword;
    
      const updated = await doctorModel.findOneAndUpdate(
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

  const addSlots = async(req,res) =>{
    const{Username,Available} = req.body

    const date=new Date(Available)
    console.log(date)
    try{
      const doctor = await doctorModel.findOneAndUpdate({Username:Username},{$push:{Available:
         date
      }})
      console.log(doctor);
      res.status(200).json(doctor)
   }
   catch(err){
      console.log(err)
   }



  }
  const Followup = async(req,res) =>{
    const {Username,FollowUp} = req.body
    const date = new Date(FollowUp)
    const result = await userModel.findOneAndUpdate({Username:Username},{FollowUp:date})
    console.log(result)
    res.status(200).json(result)
  }


module.exports = {Logindoc,changepassworddoctor,resetpassworddoctor,addSlots,Followup};