const express = require('express')
const router = express.Router()
const logintoken = require('../Middlewares/tokenMiddleware')

//Les Function Client
const { GetUserClient } = require('../Controllers/ClientController')
const checkClientMiddle = require('../Middlewares/roleClientMiddleware')

//url : api/user/client
router.get('/getuserclient', logintoken, checkClientMiddle, GetUserClient)

module.exports = router