const express = require("express")
const apiError=require("./utils/errors-Api")
const globalError=require("./middleware/error-handlling")
const app = express()
const cennection =require('./config/db');
const router = require("./routes/Auth")
const  dotenv = require('dotenv').config();;
const model = require("./model/user")
const cookie=require('cookie-parser')
const role=require('./middleware/role-Middelwar');
const cookieParser = require("cookie-parser");




app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookie())
app.use(cookieParser())

const PORT = process.env.PORT|| 6000

//routes meddleware
app.use('/api/auth',router)




app.all('*',(req,res,next) => {
    //create error and send it to error 
    next(new apiError(`Can't find this route: ${req.originalUrl}`,400))
})

app.use(globalError);





app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})
















