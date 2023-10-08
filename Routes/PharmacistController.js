const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const Pharmacist = require('C:\Users\ahmed\Desktop\ACLProject\src\Models\Pharmacist.js');

// Registration endpoint for pharmacists
router.post('/register', async (req, res) => {
  try {
    const {
      username,
      name,
      email,
      password,
      dateOfBirth,
      hourlyRate,
      affiliation,
      educationalBackground,
    } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const newPharmacist = new Pharmacist({
      username,
      name,
      email,
      password: hashedPassword,
      dateOfBirth,
      hourlyRate,
      affiliation,
      educationalBackground,
    });

    await newPharmacist.save();
    res.status(201).json({ message: 'Pharmacist registration request submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
