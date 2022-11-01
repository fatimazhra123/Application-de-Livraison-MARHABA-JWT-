const mongoose=require('mongoose')

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        
      
    },
    password:{
        type:String,
        required:true,
       
    },
    emailToken:{
        type:String,
   
    },
isVerified:{
    type: Boolean,
    default:false
},
date: { 
    type: Date, 
    default: Date.now() 
},
    role: 
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "role"
        },

})



 const User= mongoose.model('User',UserSchema)

    module.exports= User