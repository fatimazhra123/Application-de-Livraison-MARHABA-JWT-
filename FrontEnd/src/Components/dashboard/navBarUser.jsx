import React from 'react'
import { Link } from 'react-router-dom'
import Logout from '../logout'


function navBarUser() {

 
  const User = localStorage.getItem("User")

  return (
    <div>
    <header>
    <nav className="bg-dark border-gray-200 px-4  py-2.5 dark:bg-gray-800 w-screen">
    <div className="flex flex-wrap justify-between items-center">
      <div className="flex justify-start items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap User px-3">MARHABA LIVRAISON</span>
      </div>
      <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-white border-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center px-10 " type="button">{User} <svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
{/* <!-- Dropdown menu --> */}
<div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
      <li>
        <Link to="/dashboard" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard </Link>
      </li>
      <li>
        <Link to="/dashboard/me" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile </Link>
      </li>
      <Logout />
    </ul>
</div>
    </div>
  </nav>
</header>
</div>

  )
}

export default navBarUser