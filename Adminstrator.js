import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminstratorSchema = new Schema({
  Username : {
    type: String,
    required: true,
    unique: true,
  },
  Password:{
    type: String,
    required: true,
  }
}, { timestamps: true });

const Adminstrator = mongoose.model('Adminstrator', adminstratorSchema);
export default Adminstrator;