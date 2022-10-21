const router= require('express').Router();
const {Login,Register,ForgetPassword,ResetPassword,verifyUser} = require('../controller/auth')


//api/auth/login => Public : POST
router.post('/Login',Login)
//api/auth/register => Public : POS
router.post('/register',Register)
//api/auth/forgetpassword => Public : POST
router.post('/forgetpassword',ForgetPassword)
//api/auth/resetpassword/:token => Public : POST
router.post('/resetpassword/:token',ResetPassword)
router.get('/confirm/:activationCode',verifyUser)





module.exports=router;