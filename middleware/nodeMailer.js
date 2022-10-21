const nodemailer = require("nodemailer");
require('dotenv');



//nodemailer stuff
const transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 587, false for other ports
  requireTLS: true,
  auth: {
    user:process.env.Auth_EMAIL,
    pass: process.env.AuTH_PASS,
  },
});

//testing success
module.exports.sendConfirmationEmail = (name, email,activationCode) => {
    console.log("Check");
    transport.sendMail({
      from: "fatimazahrabouamoud@gmail.com",
      to: email,
      subject: "email verification ✔",
      html: `<h1>Email Confirmation</h1>
          <h2>Hello ${name}</h2>
          <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
          <a href=http://localhost:6000/confirm/${activationCode}> Click here</a>
          </div>`,
    }).catch(err => console.log(err));
  };



