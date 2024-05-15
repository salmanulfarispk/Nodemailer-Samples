const express=require("express")
const app=express();
const dotenv=require("dotenv").config();
const cors=require("cors")
port=5003
const bodyparser=require("body-parser");
const sendEmail = require("./utils/sendEmail");



app.use(express.json());
app.use(bodyparser.json())
app.use(cors())


//Routes

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.post('/api/sendemail',async(req,res)=>{
      const {email,name}=req.body;

      try {
        const send_to= email;
        const send_from= process.env.EMAIL_USER;
        const reply_to= email;
        const subject="thankyou message";
        const message=`
         <h3>hello ${name}</h3>
         <p>Thank for your advice</p>
         <p>Regards...</p>
        `
          await sendEmail(subject,message,send_to,send_from,reply_to);
          res.status(200).json({
            success:true,
            message:"Email sends"

          })
        
      } catch (error) {
        res.status(500).json(error.message)
      }
})

app.listen(port,()=>{
    console.log("port running ",port);
})
