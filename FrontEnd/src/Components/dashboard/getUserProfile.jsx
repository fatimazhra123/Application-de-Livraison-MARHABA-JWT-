import axios from 'axios';
import { useState } from 'react';

function GetUser() {

  const [message,setMessage] = useState("")
  const [succes, setSucces] = useState(false)
  const [Role, setRole] = useState("")
  const [userName , setUserName] = useState("")


    const getManagerHandler =  () => {
    const token = localStorage.getItem("token")    
    const role = localStorage.getItem("role")
    

    // console.log(token);
    const config = {
        headers: {
          Authorization :  'Bearer ' + token
        },
        withCredentials: true
      }
        const API_URL = `http://localhost:3001/api/user/${role}/me/`
        axios.get(API_URL,config).then((response) => {
        // retrieve UserName: 
        setUserName(response.data.user.name)
        setMessage(response.data.message)
        setRole(role)
        setSucces(true)})
        .catch((err) => {
            setMessage(err.response.data.message)
            setSucces(false)
    })
    }
    getManagerHandler()
    return (
      <div className='items-center justify-center '>
         <p> { succes && message }</p>
         <p> {!succes && message}</p>

<section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg mt-20">
  <div className="mt-8 ">
    <h2 className="text-white font-bold text-2xl tracking-wide text-center">{userName}</h2>
  </div>
  <p className=" text-white font-semibold mt-2.5  text-ce">
     your Role is : <span className='User'>{Role}</span> 
  </p>
</section>
</div>
    )
}
export default GetUser