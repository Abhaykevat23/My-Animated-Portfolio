const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ,
    port: 465 ,
    secure: true,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASS,
    },
});

const sendEmail = expressAsyncHandler(async (req, res) => {
    const { email,subject,message,firstName,lastName,company } = req.body;

    var mailOptions={
        from : process.env.SMTP_MAIL,
        to : email,
        subject : subject ,
        html : "<H3>Email : " + email + "<br />First Name : " + firstName + "<br />Last Name : " + lastName + "<br />Company : " + company + "<br />Message : " + message + "</H3>"
    }

    transporter.sendMail(mailOptions,function(error,info){
        if (error) {
            console.log(error);
        }
        else{
            res.json({message:"Email Sent Successfully."});
        }
    })
})

module.exports = { sendEmail };