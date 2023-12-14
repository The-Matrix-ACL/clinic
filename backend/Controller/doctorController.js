const adminstratorModel = require('../Models/Doctor.js');
const  mongoose  = require('mongoose');
const doctorModel = require('../Models/Doctor.js');
const userModel = require('../Models/User.js');
const appointmentsModel = require('../Models/Appointments.js')
const prescriptionModel = require('../Models/Prescriptions.js')

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
  ///// jesus sprint 3
  const getDrApp = async(req,res) =>{
    const {Did} = req.params
    try{
      const app = await appointmentsModel.find({Did})    
      res.status(200).json(app)

    }
    catch{
      res.status(400).json({"Message":"Cannot Find Appointments"})
    }
  }

  const rescheduleApp = async(req,res) =>{
    const {appID,AppointmentDate,Did} = req.body
    try{
      const app = await appointmentsModel.findOneAndUpdate({_id:appID,Did},{AppointmentDate})
      res.status(200).json(app)

    }
    catch{
      res.status(400).json({"Message":"Cannot Change Appointment Date"})
    }
  }
  const addPres = async(req,res) =>{
    const {DName,PName,Did,Pid,AppointmentID,Prescription,AppointmentDate} = req.body
    try{
      const pres = await prescriptionModel.create({DName,PName,Did,Pid,AppointmentID,Prescription,AppointmentDate})
      res.status(200).json(pres)
    }
    catch(err){
      res.status(400).json(err)
    }
  }
const viewDrPres = async(req,res) =>{
  const {Did} = req.params
  try{
    const pres = await prescriptionModel.find({Did})
    res.status(200).json(pres)
  }
  catch{
    res.status(400).json({"Message":"Cannot Find Prescriptions"})
  }


}

module.exports = {Logindoc,changepassworddoctor,resetpassworddoctor,addSlots,Followup,rescheduleApp,getDrApp,addPres,viewDrPres};