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


  // search for a patient by name
router.get('/patients/search', async (req, res) => {
  try {
    const { name } = req.query;
    let query = {};

    if (name) query.name = name;
    
    const patients = await Patient.find(query);
    res.status(200).json(patients);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


 
 // filter  a patient by upcoming appointments

router.get('/patients/filter', async (req, res) => {
  try {
    const {appointments} = req.query;
    let filter = {};

    if (appointments) {
      filter.appointments = appointments;
    }

    

    const filteredPatients = await Patient.find(filter);
    
    if (filteredPatients.length === 0) {
      res.status(404).json({ message: 'No doctors found matching the criteria' });
    } else {
      res.status(200).json(filteredPatients);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Select patient from list of patients

router.get('/patients/select', (req, res) => {
  res.json(patients);
});

router.get('/patients/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const doctor = await Patient.findById(id);

  if (!patient) {
    res.status(404).json({ message: 'Patient not found' });
  } else {
    res.status(200).json(patient);
  }
});

 
 module.exports= router;
