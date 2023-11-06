const adminstratorModel = require('../Models/Adminstrator.js');
const  mongoose  = require('mongoose');

const Login = async(req,res) => 
{
    const {Username,Password} = req.body;
    const reqdoctor = await adminstratorModel.findOne({ Username: Username , Password: Password });
   if (!reqdoctor) {
      return res.status(404).json({ error: 'No Account With this Username and Password were found!.' });
    }
   console.log(reqdoctor);
   
   res.status(200).json(reqdoctor._id);
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

module.exports = {Login,changepasswordadmin};