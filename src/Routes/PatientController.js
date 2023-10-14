const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Patient = require('../Models/User');
const Doctor = require('../Models/Doctor')

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

// search for a doctor by name and/or speciality 
router.get('/doctors', async (req, res) => {
  try {
    const { name, speciality } = req.query;
    let query = {};

    if (name) query.name = name;
    if (speciality) query.speciality = speciality;

    const doctors = await Doctor.find(query);
    res.status(200).json(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// filter  a doctor by speciality and/or availability on a certain date and at a specific time

router.get('/doctors/filter', async (req, res) => {
  try {
    const { speciality, date, time } = req.query;
    let filter = {};

    if (speciality) {
      filter.speciality = speciality;
    }

    if (date && time) {
      
      filter.availability = {
        $elemMatch: {
          date: date,
          time: time
        }
      };
    }

    const filteredDoctors = await Doctor.find(filter);
    
    if (filteredDoctors.length === 0) {
      res.status(404).json({ message: 'No doctors found matching the criteria' });
    } else {
      res.status(200).json(filteredDoctors);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



// select a doctor from the search/filter results and view all details of selected doctor including specilaty, affiliation (hospital), educational background 
router.get('/doctors/:doctorId', async (req, res) => {
  try {
    const doctorId = req.params.doctorId;
    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ message: 'Doctor not found' });
    } else {
      res.status(200).json(doctor);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


module.exports = router;
