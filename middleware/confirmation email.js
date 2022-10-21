const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const verifyUserShema= new mongoose.Schema({
    userId:String,
    uniqueString:String,
    CreatedAt:Date,
    expireAt:Date,
   
   

});



 const verifyUser= mongoose.model('verifyUser',verifyUserShema)

module.exports= verifyUser