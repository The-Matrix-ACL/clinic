const User =require('../Models/User')

const addFamilyInfo = async (req,res) => {
   const {Name,NationalID,Age,Gender,Relation}=req.body
   const {id}=req.params
   try{
      const user = await User.findByIdAndUpdate(id,{$push:{FamilyMembers:{
         Name,NationalID,Age,Gender,Relation
      }}})
      await res.status(200).json({user})
   }
   catch(err){
      console.log(err)
   }
}
const getFamilyMembers = async (req,res) => {
   const {id} = req.params
   try{
      const {FamilyMembers} = await User.findById(id)
      await res.status(200).json({FamilyMembers})
   }
   catch(err){
      console.log(err)
   }
}
const getUsers = async (req,res) => {

   try{
      const user = await User.find()
      await res.status(200).json(user)
   }
   catch(err){
      console.log(err)
   }
}
module.exports=  {addFamilyInfo,getUsers,getFamilyMembers};