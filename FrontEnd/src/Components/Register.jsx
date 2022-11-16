import  {useState} from 'react';
import '../index.css'
import { Link,useNavigate   } from 'react-router-dom'
import axios from 'axios';
import { showMessage } from './utiles/showMessage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const history = useNavigate();
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword]= useState("")
    // const [role, setRole]  = useState("")
    const [Succes, setMessage] = useState(false)
    const [isError, setIsError] = useState(false)

      const handleName = (e)=>{
        return setName(e.target.value)
      }
      const handleEmail = (e)=>{
        return setEmail(e.target.value)
      }
      const handlePassword = (e)=>{
        return setPassword(e.target.value)
      }
      // const handleRole = (e) => {
      //   return setRole(e.target.value)
      // }
      const API_URL = 'http://localhost:3001/api/auth/register';

      const registerHandler = async ()=>{
        const 
        user={
          name,
          email,
          password,
         
          // role
        }
        if (name === "") {
          toast.error(' name field is requred!',{
              position: "top-center",
          });
      } else if (email === "") {
           toast.error('email field is requred',{
              position: "top-center",
          });
      } else if (!email.includes("@")) {
           toast.error('plz enter valid email addres',{
              position: "top-center",
          });
      
      } else if (password === "") {
           toast.error('password field is requred',{
              position: "top-center",
          });
      } else if (password.length < 5) {
           toast.error('password length greater five',{
              position: "top-center",
          });
      } else {
          console.log("data added succesfully");
          history("/login");

      }
       try {
         const result = await axios.post(API_URL , user)
         console.log(result.data.message)
         setMessage(result.data.message)
         isError(false);
        //  )
       } catch (error) {
         console.log(error.response.data.message)
         setIsError(error.response.data.message)
         isError(true)
       }
      

    }




    return (
        <div 
        className='bg-gray-50 px-20 py-2 shadow-xl   rounded-2xl border-2 animate__animated animate__zoomIn border-gray-200 flex flex-col place-items-center'>
        <h1 
        className='mt-2 text-center text-3xl font-bold tracking-tight '>Create your account
        </h1>
        { Succes &&  showMessage( isError , Succes)}
        <div 
        className='mt-4 '>
        <div>

        {/* input Name:*/}
        <label 
        for="name" 
        className='text-xs font-medium'>Name
        </label>

        <input 
        id="name"
        value={name}
        onChange={handleName}
        name="name" 
        type="name" 
        required 
        className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1  text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm " 
        placeholder="Enter Your Name" />
        {/* end input Name  */}


        {/* input email */}
        <label 
        for="email" 
        className='text-xs font-medium'>Email
        </label>
        <input 
        id="email" 
        value={email}
        onChange={handleEmail}
        name="email" 
        type="email" 
        autoComplete="email" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm" placeholder="Enter Your email address" />
        {/* end input email  */}

        {/* inut password */}
        <label 
        for="password" 
        className='text-xs font-medium'>password
        </label>
        <input 
        id="password" 
        name="password" 
        value={password}
        onChange={handlePassword}
        type="password" 
        autoComplete="password" 
        required 
        class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 my-1 text-gray-900 placeholder-gray-500 focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm" 
        placeholder="***************" />
        {/* end input password */}
        </div>


        {/* input select role */}
        {/* <select 
        id="role" 
        name="role" 
        value={role}
        onChange={handleRole}
        type="role" 
        autoComplete="role" 
        required 
        className="mt-3 block w-full  rounded-none rounded-t-md border  px-3 py-2 text-gray-900  focus:z-10  focus:border-violet-900 focus:outline-none focus:ring-violet-900 sm:text-sm">
        <option selected>Choose your Role</option>
        <option 
        value="client">Client
        </option>
        <option 
        value="livreur">Livreur
        </option>
        </select> */}
        {/* end seelct role  */}
                
        <div 
        className='flex  flex-col mt-2  align-items-center justify-content-center'>
        <p 
        className='text-perso text-black-500 text-center mb-3 mt-3  '> By clicking <span className='font-bold'style={{color:"#48ea98"}}>Register</span>  you agree to Marhaba  <br/>Livraison <span className='font-semibold underline'style={{color:"#48ea98"}}>Terms</span>  and  <span className='font-semibold underline'style={{color:"#48ea98"}}>Privacy Policy</span>
        </p>
        <p 
        className='text-xs text-black-500 text-center mt-3 '>you already have an account ? <br /> <Link to="/login" className='underline' style={{color:"#48ea98"}}>click here to login</Link> 
        </p>
        </div>
                
        <div 
        className='mt-8 flex flex-col gap-y-4'>
        <button
        className='text-sm active:scale-[.98]  active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3  text-white  font-bold rounded-xl' 
        onClick={registerHandler} style={{ background:"#48ea98"}}>Sign up
        </button>
        </div>
        </div>
        <ToastContainer />
        </div>
    )
}


export default  Register;