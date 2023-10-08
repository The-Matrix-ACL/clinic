const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  gender: String,
  mobileNumber: String,
  emergencyContact: {
    fullName: String,
    mobileNumber: String,
    relation: String,
  },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
