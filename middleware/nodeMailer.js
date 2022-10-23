const nodemailer = require("nodemailer");
require('dotenv');



  let transport = nodemailer.createTransport({
    service:"Gmail",
    auth: {
      user:process.env.Auth_EMAIL,
      pass: process.env.AuTH_PASS,
    },
  });

  const sendConfirmationEmail = (req,user,res)=>{
    const mailOptions = {
      from: "verify your email" + process.env.Auth_EMAIL,
      to : user.email,
      subject: "email verification ✔",
      html: `<h1>Email Confirmation</h1>
            <h2>Hello</h2>
            <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
            <a href=http://localhost:3000/api/auth/verifyUser/${user.emailToken}> Click here</a>`
    };

    transport.sendMail(mailOptions,function(err, info){
      if(err){
        console.log(err)
      }
      else{
        console.log("verification email is sent to your gmail account")
      }

    })
  }

  
  // const Forgotpassword = (req,user,res)=>{
  //   const mailOptions = {
  //     from: "reset your password" + process.env.Auth_EMAIL,
  //     to : user.email,
  //     subject: "reset your password",
  //     html: `<h1>reset your password</h1>
  //           <p>to reset your password click to this link </p>
  //           <a href=http://localhost:3000/api/auth/forgetpassword/${user.emailToken}> Click here</a>`
  //   };

  //   transport.sendMail(mailOptions,function(err, info){
  //     if(err){
  //       console.log(err)
  //     }
  //     else{
  //       console.log("verification email is sent to your gmail account")
  //     }

  //   })
  // }
module.exports = {sendConfirmationEmail}

