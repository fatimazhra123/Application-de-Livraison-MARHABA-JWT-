import Register from './Components/Register'
import Login from './Components/login'
import Background from './Components/Background'
import ForgetPassword from './Components/forgotpassword'
import VerifyEmail from './Components/auth/verifyEmail'
import ResetPassword from './Components/ResetPassword'
import PageNotFound from './Components/no results/404'
import GetUser from './Components/dashboard/getUserProfile'
import Dashboard from './Components/dashboard/dashboard'
import Homepage  from './Components/HeroSection/homepage'
import './index.css'

import {BrowserRouter as Router  ,  Routes , Route, Navigate   } from 'react-router-dom'

function App() {
  const role = localStorage.getItem("role")
  return (
    <Router>
    <div className='flex w-full h-screen '>
    <Routes>  
    <Route path='/' element={<Homepage />} />
      <Route path='/*' element={<PageNotFound />} />
        <Route element={<Background />}>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>    
        <Route path='/verifyUser/:emailToken' element={<VerifyEmail/>}/>
        <Route path='/resetpassword/:token' element={<ResetPassword/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
      </Route>
      <Route path='/dashboard' element={ <Dashboard />  }>
      <Route path='me'  element={ role ? (<GetUser />) : <Navigate to="/login" />  }/>
      </Route>
    </Routes>
    </div>
    </Router>
  )
}
export default App;
