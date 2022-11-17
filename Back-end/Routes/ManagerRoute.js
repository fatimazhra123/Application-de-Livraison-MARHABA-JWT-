const express = require('express')
const router = express.Router()
const logintoken = require('../Middlewares/tokenMiddleware')


//Les Function Manager
const { GetUserManger } = require('../Controllers/ManagerController')
const checkManagerMiddle = require('../Middlewares/roleManagerMiddleware')


//url : api/user/manager
router.get('/getusermanger', logintoken, checkManagerMiddle, GetUserManger)

module.exports = router