const  Doctor  = require('../Models/Doctor')
const getDoctors = async (req,res) => {

    try{
       const doctor = await Doctor.find()
       await res.status(200).json(doctor)
    }
    catch(err){
       console.log(err)
    }
 }
 
const getPatients = async(req,res) => {
    const {id}=req.params
    try{
        const {RegisteredPatients} = await Doctor.findById(id)
        await res.status(200).json({RegisteredPatients})
    }
    catch(err){
        console.log(err)
        
 }
 }
const getPatientInfo = async(req,res) => {
    const{id}=req.params
    const {RegisteredPatients} = await Doctor.findById(id)
    RegisteredPatients.map((patient)=>{

    })


 }
 const searchForPatient = async (req, res) => {
    const {name} = req.params
  
    const patient = await Patient.findByName(name)
  
    if(!patient){
      return res.status(404).json({error: 'No patient with this name was found'})
    }
    res.status(200).json(patient)
  }
 
  const filterByApp = async (req, res) => {
    const upcoming_appointments = req.query.appointments;
 
   const patients = await Patient.find({
     appointments: {
       $regex: new RegExp(upcoming_appointments, 'i')
     }
   });
 
   res.send(patients);
  }
 
 module.exports=  {getDoctors,getPatients};
 