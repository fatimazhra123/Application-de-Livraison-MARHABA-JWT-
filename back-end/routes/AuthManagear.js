const express = require('express')
const routerManager = express.Router()

const {Manager} = require('../controller/managearAuth')
const {Manager } = require('../middleware/role-Middelwar')

routerManager.get('/monRole',Manager,Manager)



module.exports = routerManager