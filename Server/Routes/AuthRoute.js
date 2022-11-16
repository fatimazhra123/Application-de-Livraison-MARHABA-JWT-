const express = require('express')
const router = express.Router()


//Les Function Authentification
const { Login, register, ForgetPassword, ResetPassword, Verify } = require('../Controllers/AuthController')

//url : /api/auth
router.post('/login', Login)
router.post('/register/', register)
router.post('/forgetpassword', ForgetPassword)
router.post('/resetpassword/:token', ResetPassword)
router.get('/user/:id/confirm/:token', Verify)


module.exports = router