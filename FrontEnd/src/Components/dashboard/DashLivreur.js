import React from 'react'
import ImageLevreur from '../../assets/livreur.png'

const DashLivreur = () => {
  return (
    
    <div className={{justifyContent:"center"}}>

    <div className=" container card">
    <div className="center">
    <img src=  {ImageLevreur} alt="Avatar" style={{width:"70%", justifyContent:" center"}} />
        <h1><b>Bonjour oussama, votre rôle est : Livreure</b></h1>
      </div>
      
    </div>
         
        
        </div>
     
   
  )
}

export default DashLivreur
