const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Patient = require('C:\Users\ahmed\Desktop\ACLProject\src\Models\Patient.js');

// Registration endpoint
router.post('/register', async (req, res) => {
  try {
    const {
      username,
      name,
      email,
      password,
      dateOfBirth,
      gender,
      mobileNumber,
      emergencyContact,
    } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newPatient = new Patient({
      username,
      name,
      email,
      password: hashedPassword,
      dateOfBirth,
      gender,
      mobileNumber,
      emergencyContact,
    });

    await newPatient.save();
    res.status(201).json({ message: 'Patient registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// view all doctors along with their speciality and session price
router.get('/doctors/viewall', async (req, res) => {
  
  
    const doctors = await Doctor.find();

    for (const doctor of doctors) {
      const SessionPrice = doctor.rate + (0.1*Patient.ClinicMarkup) - Patient.Discount;
      doctor.SessionPrice = SessionPrice;
    }

      res.status(200).json(doctors);
  }); 


module.exports = router;
