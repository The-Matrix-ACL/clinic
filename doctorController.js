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
 
 module.exports=  {getDoctors,getPatients};
 