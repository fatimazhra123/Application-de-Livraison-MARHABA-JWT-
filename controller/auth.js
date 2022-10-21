
const express=require('express')
//mongodb user model
const User =require('../model/user')
//Password handler
const bcrypt=require('bcrypt')
const jwt= require('jsonwebtoken')
const SECRET_KEY="NOTESAPI";
//email handeler
const nodemailer=require('../middleware/nodeMailer')
//mongod user verification model:
const  verifyUser=require('../middleware/confirmation email')


 
// Signup
const Register = async (req,res) => {

    //methode pour creer une chaine charavtére aléartoire!!
    const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let activationCode = '';
    for (let i = 0; i < 25; i++) {
        activationCode += characters[Math.floor(Math.random() * characters.length )];
    }

//existing User Chek
     try{
     const {name,email,password,PhoneNumber,adresse} = req.body;

        const userExists= await  User.findOne({email:email});
        if (userExists){
         return res.status(400).json({message : "User already is exists"})

        }
       
    
//Hashed Password 
        const hashedPassword= await bcrypt.hash(password,10);

//User Creation
        const result=await User.create({

email:email,
password:hashedPassword,
name:name,
PhoneNumber:PhoneNumber,
adresse:adresse,
activationCode:activationCode,
Verified:false,

        });
        nodemailer.sendConfirmationEmail(
            result.name,
            result.email,
            result.activationCode
      );  

            if  ( result.save){
              res.status(500).send({ message:   "User was registered successfully! Please check your email", });
                   return;
                }
               res.send({
                   message:
                     "erro",
                });
       
            
       
       

//Token Genrate
const Token=jwt.sign({email:result.email,id:result._id},SECRET_KEY)
res.status(201).json({User:result,Token});

     }catch(error){

console.log(error);
res.status(500).json({message :"something is wrong"})

     }
}



const Login = async (req,res) => {
const  { email,password}=req.body;
try{

    const userExists= await  User.findOne({email:email});
    if (!userExists){
     return res.status(404).json({message : "user not found"}) 
     
}
// if(userExists && matchPassword && !userExists.Verified ){

//     return res.send({
//   accessToken:null,
//    message:"veuillez verifier votre boite email pour l'activation",
  
//     })
//   }
const matchPassword=await bcrypt.compare(password,userExists.password);



if(!matchPassword){

    return res.status(400).json({message : "Invalid Credentials"}) ;
}



const Token=jwt.sign({email:userExists.email,id:userExists._id},SECRET_KEY)
res.status(201).json({User:userExists,Token});
}catch(error){

    console.log(error);
    res.status(500).json({message :"something is wrong"});

}

 }
 





const ForgetPassword =  (req,res) => {
    res.status(200).send('this function Forget password')
}
const ResetPassword =  (req,res) => {

    res.status(200).send('this function reset password')
}




module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
   verifyUser,
}