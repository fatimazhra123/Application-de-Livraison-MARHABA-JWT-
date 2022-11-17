import Register from './Components/Register'
import Login from './Components/login'
import Background from './Components/Background'
import ForgetPassword from './Components/forgotpassword'
import ResetPassword from './Components/ResetPassword'
import PageNotFound from './Components/no results/404'
import Homepage  from './Components/HeroSection/homepage'
import {ToastContainer} from 'react-toastify'

import './index.css'

import {BrowserRouter as Router  ,  Routes , Route  } from 'react-router-dom'
import RequireAuth from './Components/RequireAuth'

import DashManager from './Components/dashboard/DashManager'
import DashLivreur from './Components/dashboard/DashLivreur'
import DashClt from './Components/dashboard/DashClt'
import AccessDenied from './Components/dashboard/AccessDenied'

function App() {

  return (
    <Router>
    <div className='flex w-full h-screen '>
    <Routes>  
    <Route path='/' element={<Homepage />} />
      <Route path='/*' element={<PageNotFound />} />
        <Route element={<Background />}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>    
        {/* <Route path='/verifyUser/:emailToken' element={<VerifyEmail/>}/> */}
        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      </Route>
      
      {/* <Route path='me'  element={ role ? (<GetUser />) : <Navigate to="/login" />  }/>
      </Route> */}
      <Route element={<RequireAuth Role= {['client']}/>}> 
        <Route path='/client' element={ <DashClt/>  }/>
      </Route>
      <Route element={<RequireAuth Role= {['manager']}/>}> 
        <Route path='/manager' element={ <DashManager/> }/>
      </Route>
      <Route element={<RequireAuth Role= {['livreur']}/>}> 
        <Route path='/livreur' element={  <DashLivreur/>  }/>
      </Route>
      <Route path='/access_denied' element={<AccessDenied />} />
    </Routes>
    <ToastContainer />
    </div>
    </Router>
  )
}
export default App;
