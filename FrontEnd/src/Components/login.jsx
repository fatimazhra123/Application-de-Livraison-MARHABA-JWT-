import {useState} from 'react';
import '../index.css'
import { Link , useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios';
// import { showMessage } from './utiles/showMessage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const  Login = () =>  {

    const navigate = useNavigate();
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    // const [Message, setMessage] = useState("")
    // const [Error , setError] = useState(false);

    const location = useLocation();
    const from =  location.state?.from || '/';
   
    const handleEmail = (e)=>{
        return setEmail(e.target.value)
      }
      const handlePassword = (e)=>{
        return setPassword(e.target.value)
      }

      const API_URL = "http://localhost:8000/api/auth/login"
      const loginHandler = async () => {
        const user = {
            email,
            password,
        }

      if (email === "") {
          toast.error('email field is requred', {
              position: "top-center",
          });
      } else if (!email.includes("@")) {
          toast.error('plz enter valid email addres', {
              position: "top-center",
          });
      } else if (password === "") {
          toast.error('password field is requred', {
              position: "top-center",
          });
      } else if (password.length < 5) {
          toast.error('password length greater five', {
              position: "top-center",
          });
      }
        try {
          const result = await axios.post(API_URL , user)
          console.log(result)
        
            const role = result.data.role.role
            console.log(role); 
            // const Username = result.data.user.name
            localStorage.setItem("role", role)
            // localStorage.setItem("User", Username)
            // setError(false)
            navigate(from, {replace : true})
            console.log(from);
          } catch (error) {
            // setMessage(error.response.data.message)
            // setError(true)
          }
      }
    return (
        <div 
        className='bg-gray-50 px-20 py-8  shadow-xl  rounded-2xl border-2  animate__animated animate__zoomIn    border-gray-200 flex flex-col place-items-center'>

      <h2 className='text-center text-3xl font-bold text-dark'>Sign in</h2>

        <h1 
        className='mt-2 mb-2 text-center text-3xl font-bold tracking-tight 'style={{color:"#48ea98"}}>Welcome Back
        </h1>

        <p 
        className='text-xs font-medium 'style={{color:"#48ea98"}}>Welcome Back please enter your details
        </p>
        
        {/* {Message && showMessage( Error ,  Message)} */}

        <div 
        className='mt-4 '>
        <div>
 
        <label 
       
        className='text-xs font-medium'>Email
        </label>
        <input 
        id="email" 
        name="email" 
        type="email" 
        autoComplete="email" 
        value={email}
        onChange={handleEmail}
        required 
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="EnteYour email address" />

        <label 
        
        className='text-xs font-medium'>password
        </label>
        <input 
        id="password" 
        name="password" 
        autoComplete="password" 
        required 
        type="password" 
        value={password}
        onChange={handlePassword}
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-3 my-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter a password" />
        </div>
                
        <div 
        className='flex flex-row place-items-center justify-between mt-3'>
        <div 
        className="flex items-center mb-4">


        </div>
        <div 
        className='flex  flex-col   align-items-center justify-content-center'>
        <Link  
        to="/forgetpassword" 
        className=' text-center mb-4 text-xs font-medium 'style={{color:"#48ea98"}}>forgot password? 
        </Link>
        </div>
        </div>
                    

        <p 
        className='text-xs text-black-500 text-center mt-3'>You dont have an account? <br /> 
        <Link 
        to="/Register" 
        className=' underline'style={{color:"#48ea98"}}>click here to Register
        </Link> 
        </p>
                    
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-fuchsia-700 text-white  font-bold rounded-xl'
        onClick={loginHandler} style={{ background:"#48ea98"}}>Sign in
        </button>
        </div>
        </div>
        <ToastContainer />
        </div>
    )
}

    export default Login