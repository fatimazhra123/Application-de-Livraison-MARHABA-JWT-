import {useState} from 'react';
import '../index.css'
import axios from 'axios';
import {useParams , useNavigate } from 'react-router-dom';
import { showMessage } from './utiles/showMessage';


const  ResetPassword = () =>  {

    const navigate = useNavigate();
    const {token} = useParams();
    const [password , setPassword] = useState("");
    const [password2 , setPassword2] = useState("");
    const [message , setMessage] = useState("");
    const [isError , setIsError] = useState(false)

    const handlePass = (e) => {
        return setPassword(e.target.value)
    }
    const handlePass2 = (e) => {
        return setPassword2(e.target.value)
    }

    const API_URL = `http://localhost:8000/api/auth/resetpassword/${token}`
console.log(token)
    const resetpassword = async () => {

     const 
     user= {
        password,
        password2
     }  
     try {
        const result = await axios.post(API_URL, user)
        setMessage(result.data.message)
        console.log(result.data.message)
        setIsError(false)
        navigate('/login')
     } catch (error) {
        console.log(error)
        setIsError(true)
        
     
     }

    }

    return (
        <div 
        className='bg-gray-50 px-20 py-5 animate__animated animate__zoomIn  shadow-xl rounded-2xl border-2 border-gray-200 flex flex-col place-items-center'style={{width: "60%",height:"55%"}}>


        <h2 
        className= 'mt-2  text-center mb-5 text-2xl font-bold tracking-tight 'style={{color:"dark"}}>enter your new password
        </h2>
        <div 
        className='mt-4 '>
        <div>

        <p>  { message &&  showMessage( isError , message)}
</p>
 
        <label 
        for="Password" 
        className='text-xs font-medium'>Password
        </label>
        <input 
        id="Password" 
        name="Password" 
        type="Password" 
        value={password}
        onChange={handlePass}
        autocomplete="Password" 
        required 
        class=" w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-6  my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter Your new Password " />


        <label 
        for="Password" 
        className='text-xs font-medium'>Confirm Password
        </label>
        <input 
        id="Password" 
        name="Password" 
        type="Password"
        value={password2}
        onChange={handlePass2} 
        autocomplete="Password" 
        required 
        class=" w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-6 py-2 my-1 text-gray-90placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="confirm Password " />

        </div>

        
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-2  text-white  font-bold rounded-xl' 
        onClick={resetpassword}  style={{ background:"#48ea98"}}>Reset password 
        </button>
        </div>
        </div>
        </div>
    )
}

export default ResetPassword;