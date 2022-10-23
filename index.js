const express = require("express")
const app = express()
const cennection =require('./config/db');
const router = require("./routes/Auth")
const  dotenv = require('dotenv').config();;
const model = require("./model/user")
const cookie=require('cookie-parser')





app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())

const PORT = process.env.PORT|| 6000

//routes meddleware
app.use('/api/auth',router)




app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})
















