import { Outlet} from 'react-router-dom'
import NavBarUser from './navBarUser'




function Dashboard() {


  const Name = localStorage.getItem("User")
  const Role = localStorage.getItem("role")

  return (
  <div> 
   <NavBarUser />
   <p className=' flex  justify-center mt-20 text-2xl font-bold  '>
      Hey  <span className='User mx-2'> { Name } </span>  Welcome To  Your Space  <span className='User mx-2'>{ Role }</span>
    </p>
   <Outlet />
  </div>  
  )
} 
export default Dashboard