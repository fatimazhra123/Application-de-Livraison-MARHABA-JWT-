const express = require('express')
const routerLivreur = express.Router()

const { Livreure} = require('../controller/livreurAuth')
const {  Livreure, authorization } = require('../middleware/role-Middelwar')

routerLivreur.get('/monRole',authorization, Livreure, Livreure)



module.exports =routerLivreur