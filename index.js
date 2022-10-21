


const express = require("express")
const app = express()
const cennection =require('./config/db');
const router = require("./routes/Auth")
const  dotenv = require('dotenv');
const model = require("./model/user")
// const authnetificate= require('./middleware/authentificate')

dotenv.config();


app.use(express.json())
app.use(express.urlencoded({extended:true}))


const PORT = process.env.PORT|| 6000

//routes meddleware
app.use('/api/auth',router)

const verifyUser = (code) => {
    return axios.get(API_URL + "confirm/" + code).then((response) => {
      return response.data;
    });
  };


app.listen(PORT, (err)=> {
    if(!err){
    console.log(`the port ${PORT} is running`)
    }else{
        console.log(err)
    }
})
















