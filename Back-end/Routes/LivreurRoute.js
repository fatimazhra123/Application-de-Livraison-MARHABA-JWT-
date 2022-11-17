const express = require('express')
const router = express.Router()
const logintoken = require('../Middlewares/tokenMiddleware')


//Les Function Livreur
const { GetUserLivreur } = require('../Controllers/LivreurController')
const checkLivreurMiddle = require('../Middlewares/roleLivreurMiddleware')

//url : api/user/livreur
router.get('/getuserlivreur', logintoken, checkLivreurMiddle, GetUserLivreur)

module.exports = router