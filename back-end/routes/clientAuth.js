const express = require('express')
const routerClient = express.Router()

const { Client} = require('../controller/authClient')
const {  Client, authorization } = require('../middleware/role-Middelwar')

routerClient.get('/monRole',authorization, Client, Client)



module.exports =routerClient