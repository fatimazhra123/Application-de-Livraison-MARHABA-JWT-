import React from 'react'
import { Outlet, useLocation, Navigate } from 'react-router-dom'
import AccessDenied from './dashboard/AccessDenied'


const RequireAuth = ({Role}) => {
    const location = useLocation()
    const role = localStorage.getItem('role')

    if(!role){
       return <Navigate to='/login' state={{from : location}} replace />
    }
    if(Role.indexOf(role) < 0){
        return <AccessDenied />
    }

    return <Outlet/>

    
  
}

export default RequireAuth
