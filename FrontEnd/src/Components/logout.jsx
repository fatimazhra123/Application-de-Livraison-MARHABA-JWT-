import React from 'react'
import { Link  } from 'react-router-dom'


function  Logout() {



    // const  navigate = useNavigate();
    function  ClearLocalStorage() {
        localStorage.clear();  
    }
    
  return (
    <div> 
          <Link to='/login' onClick={ClearLocalStorage}>logout</Link>
    </div>
  )
}

export default Logout