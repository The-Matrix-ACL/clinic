import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true,
  },
  DateOfBirth: {
    type: Date,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  MobileNumber: {
    type: Number,
    required: true,
  },
  EmergencyContactFullName: {
    type: String,
    required: true,
  },
  EmergencyContactNumber: {
    type: Number,
    required: true,
  }
}, { timestamps: true });
/*
username: String,
  name: String,
  email: String,
  password: String,
  dob: Date,
  gender: String,
  mobileNumber: String,
  emergencyContact: {
    fullName: String,
    contactNumber: String,
*/ 

const User = mongoose.model('User', userSchema);
export default User;