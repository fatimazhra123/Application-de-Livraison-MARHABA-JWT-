const router= require('express').Router();
const mongoose=require('mongoose');
const  {loginrequired}=require('../config/jwt')
const {Login,Register,ForgetPassword,getResetpassword,verifyUser,Resetpassword} = require('../controller/auth')


//api/auth/login => Public : POST
router.post('/Login',Login)
//api/auth/register => Public : POS
router.post('/register',Register)
//VER
router.get('/verifyUser/:emailToken',verifyUser)

//api/auth/forgetpassword => Public : POST
router.post('/forgetpassword',ForgetPassword)
//api/auth/resetpassword/:token => Public : POST
// router.post('/resetpassword/:token',ResetPassword)
router.post('/resetpassword/:token',Resetpassword)

// router.get('/forgetpassword/:emailToken',linkForgetpassword)






module.exports=router;