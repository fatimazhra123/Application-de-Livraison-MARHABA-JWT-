import React from 'react'
import  ImageClient from '../../assets/client.png'
// import { Link } from 'react-router-dom'

const DashClt = () => {

//     function ClearLocalStorage(){

//         localStorage.clear();
//       window.location.replace('http://localhost:3000/login')

// }
  
  return (
  
<div className={{justifyContent:"center"}}>

<div className=" container card">
<div className="center">
<img src=  {ImageClient} alt="Avatar" style={{width:"70%", justifyContent:" center"}} />
    <h1><b>Bonjour Amin, votre rôle est : Client</b></h1>
  </div>
  
</div>
     
    
    </div>

     
    
         
   
   
  )
}

export default DashClt
