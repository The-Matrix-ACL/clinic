const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const userRouter = require('./user');

// MongoDB setup
mongoose.connect('mongodb://localhost/patientdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api/patients', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const pharmacistRouter = require('./pharmacist'); // Import the pharmacist routes

app.use('/api/pharmacists', pharmacistRouter); // Use the pharmacist routes


const adminRouter = require('./admin'); // Import the admin routes

app.use('/api/admins', adminRouter); // Use the admin routes

