const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
const 
{    addFamilyInfo ,getUsers,getFamilyMembers
} = require("../controllers/userController");

router.get("/user", getUsers);
router.put("/addfamilymember/:id",addFamilyInfo)
router.get("/getfamilymembers/:id",getFamilyMembers)
module.exports = router;