const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken')
const apiError=require('./error-handlling')
const app =express()


const authorization = (req, res, next) => {
    
    const token = req.cookies.access_token;
   
    if (!token) {
      return res.sendStatus(403);
    }          
    try {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = data.id;
      req.userRole = data.role;
      return next();
    } catch(error) {
        console.log(error)
      return res.sendStatus(403);
    }
  };

const Admin = (req,res,next) => {
    if(req.userRole != 'admin'){
        res.status(404).send('cest pas le admin')
    }
}
const Client = (req,res,next) => {
    if(req.userRole != 'CLIENT'){
        res.status(404).send('cest pas le  client')
    }else{
        next()
    }
}
const Manager = (req,res,next) => {
    if(req.userRole != 'manager'){
        res.status(404).send('cest pas le manager')
    }
}
const Livreure = (req,res,next) => {
    console.log(req.userRole)
    if(req.userRole != 'LIVREURE'){
        res.status(404).send('cest pas le livreur')
    }else {
        next()
    }
}

module.exports ={
    authorization,
    Admin,
    Client,
    Manager,
    Livreure
} 