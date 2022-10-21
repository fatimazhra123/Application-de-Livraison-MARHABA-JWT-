const mongoose=require('mongoose')

const Userschema= new mongoose.Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
      
    },
    role:{
        type:String,
       
    },
    password:{
        type:String,
       
    },

  PhoneNumber:{
    type:Number,
   
},
adresse:{
    type:String,
    
},
Verified:{
    type:Boolean,
    default:false,
},
activationCode: { 
    type: String, 
    unique: true }

})



 const User= mongoose.model('user',Userschema)

module.exports= User