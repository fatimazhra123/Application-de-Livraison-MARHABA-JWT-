
const express=require('express')
const cookie=require('cookie-parser')
//mongodb user model
const User =require('../model/user')
//Password handler
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
const crypto =require('crypto')
//email handeler
const nodemailer=require('../middleware/nodeMailer')
//mongod user verification model:
const {mongoose } = require('mongoose')
const { findOne } = require('../model/user')
require('dotenv');
const console = require('console')
// const jt=require('../config/jwt')
const {sendConfirmationEmail} = require('../middleware/nodeMailer')

//Signup

const Register = async(req,res)=>{

  const {name,email,password}=req.body

  if(!name || !email || !password){
    console.log("all filed is required")
  }

  const userExist = await User.findOne({email})
  if(userExist){
    console.log("email is already exist")
  }

  //hash password
  const salt = await bcrypt.genSalt(10)
  const hashePassword=await bcrypt.hash(password,salt)

  // creat user

  const User_ = await User.create({
      name,
      email,
      password : hashePassword,
      emailToken:crypto.randomBytes(64).toString('hex'),
      isVerified:false
  })

  sendConfirmationEmail(req,User_,res) 
  
  if(User_){
    res.json({
      _id : User_.id,
      name : User_.name,
      email : User_.email,
      password : User_.password,
      emailToken : User_.emailToken

    })
  }
  else{
    console.log("invalid data")
  }

}


const verifyUser=async(req,res)=>{

  try{
      const emailToken=req.params.emailToken
      const user_= await User.findOne({emailToken:emailToken})
      console.log(user_)
      if(user_){

        // user_.emailToken=null
        user_.isVerified=true

        await user_.save()
        // console.log('email is verified')
        res.send({
          message:"le Compte est active"
      })
      console.log("email is verified")
      }
  
  }catch(err){

    console.log('email is not verified')

  }
  
    
   }

  



const createToken=(id)=>{
  return jwt.sign({ id},process.env.JWT_SECRET)
}
//loginn:

const Login = async(req,res) => {
  const{email,password,}=req.body

  if(!email || !password){
    console.log("all field is required")
  }

  const findUser= await User.findOne({email})

  if(findUser && (await bcrypt.compare(password,findUser.password)) &&  findUser.isVerified === true){
    
    //create token
    const token=  createToken(findUser.id)
    // res.status(201).json({token});
    console.log(token)
    //store token in cookie
    res.cookie('access-token',token)
    res.status(200).send("Login is sucesssusfully!!!!") ;
  }
  else{
    console.log("invalid data or is email is not verfied")
  }

}

const ForgetPassword= async(req,res)=>{
  const {email} = req.body;
  try{
  const User_ = await User.findOne({email});
  if(!User_){
  return res.json({status : "User Not exists"});
  
  }
  //user exist and now create a one time link valid for 10 minutes

  const secret = process.env.JWT_SECRET ;
  const token = jwt.sign({email:User_.email},secret,{
  expiresIn:'10m'
  });
  const link =`http://localhost:3000/api/auth/resetpassword/${token}`;
  console.log(link)
  let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
  user:process.env.Auth_EMAIL,
  pass: process.env.AuTH_PASS,
}
});

let mailOptions = {
from: process.env.Auth_EMAIL,
to: email,
subject: "reset your password",
text: link
};

transporter.sendMail(mailOptions, function(error, info){
if (error) {
  console.log(error);
} else {
  console.log('email sent: ' + info);
}
});
console.log(link);
}catch(error){
  console.log(error)
}
  
}


const Resetpassword= async(req,res)=>{
  let token = req.params.token
  const {password} = req.body
  const user = jwt.verify(token, process.env.JWT_SECRET)

  const result = await User.findOne({email: user.email})

  if(!result){
      res.send('error')
  }else{

      let hashed = await bcrypt.hash(password, 10)
      result.password = hashed
      await result.save()
      res.send('Votre mot de passe a été changer')

  }
}



module.exports = {Login, Register,ForgetPassword,verifyUser,Resetpassword}