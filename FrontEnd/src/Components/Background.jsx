import '../index.css'
// import HomePage from '../assets/HomePage.svg';
import { Outlet } from 'react-router-dom';



export default function form() {
    return (
        <>
    <div className='w-full flex items-center justify-center lg:w-1/2' style={{width:"730%"}}>

                <Outlet />
    </div>
            <div 
            className=' lg:flex  h-full w-1/2 items-center justify-center relative' 
            style={{backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundPosition: 'center',}}>
          
            </div>
        </>
)}