import React from 'react'
import '../../index.css'
import {Link} from 'react-router-dom'



function homepage() {
  return (
    
    <div className=" grid px-10 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 ">
     <nav className="dark:bg-gray-800  px-2 sm:px-4 py-2.5 navbar fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <Link to="/" className="flex items-center">
      <h3 className='px-10 User'>MARHABA RESTAURANT</h3>
    </Link>
    <div className="flex md:order-2">
      <Link to="" type="button" className="text-white bg-violet-700 hover:bg-#48ea98-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center mr-3  px-10 md:mr-0 started">Home</Link>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      </button>
    </div>
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  ">
        <li>
          
        </li>
        <li>
          
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div className=" text-center  place-self-center lg:col-span-12 " 
    >
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl marhaba ">Application MARHABA <span className='span font-extrabold'>Livraison</span> </h1>
      <Link to="/login" className=" font-extrabold inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-white-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 dark:text-white Login">
       Login
      </Link>
      <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center font-extrabold border-dark border-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-violet-100 text-black-500  dark:border-violet-700 ">
        Register
      </Link> 
    </div>
  </div>
  )
}
export default homepage