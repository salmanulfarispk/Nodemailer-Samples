const express=require("express")
const app=express();
const dotenv=require("dotenv").config();
const cors=require("cors")
port=5003
const bodyparser=require("body-parser");
const sendEmail = require("./utils/sendEmail");
const nodemailer=require("nodemailer")
const userRouter=require("./routes/mailer")



app.use(express.json());
app.use(bodyparser.json())
app.use(cors())


app.use("/api/user/",userRouter)
         

app.listen(port,()=>{
    console.log("port running ",port);
})
