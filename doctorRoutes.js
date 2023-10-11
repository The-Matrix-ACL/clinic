const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const 
{    getPatients, getDoctors
} = require("../controllers/doctorController");

router.get("/getdoctors",getDoctors)
router.get("/getpatients/:id", getPatients);
module.exports = router;