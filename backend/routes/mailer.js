const express=require("express");
const { sendemail, mailsending } = require("../controller/Allcontrollers");
const router=express.Router()




router
.post('/sendemail',sendemail)
.post('/mailsending',mailsending)







module.exports=router;