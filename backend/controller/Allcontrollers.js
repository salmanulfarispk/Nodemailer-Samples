const sendEmail = require("../utils/sendEmail");
const nodemailer=require("nodemailer")




module.exports={
   
    sendemail:async(req,res)=>{

        const {email,name,texts}=req.body;

        try {
          const send_to= email;
          const send_from= process.env.EMAIL_USER;
          const reply_to= email;
          const subject="thankyou message";
          const message=`
           <h3>hello ${name}</h3>
           <p>${texts}</p>
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

    },
           //This is the format....

    mailsending:async(req,res)=>{
        const { email, name } = req.body;

        try {
        
            const transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',    //or we can use directly as "gmail"
                port: 587,
                auth: {
                    user: 'susanna.heaney11@ethereal.email',
                    pass: 'PMzBFnfAxBp1MQA52K'
                }
            });
    
            await transporter.sendMail({
                from: "susanna.heaney11@ethereal.email",
                to: email,
                subject: "Any advicess..",
                text: "peace....",
                html: `<h3>Hello ${name}</h3><p>Thank you for your advice</p><p>Regards</p>`
            });
    
            res.status(200).json({
                success: true,
                message: "Email sent successfully"
            });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({
                success: false,
                message: "Failed to send email"
            });
        }

    },
    







}