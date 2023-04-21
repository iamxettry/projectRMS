import React, { useState } from "react";
import {AiOutlineMenu} from 'react-icons/ai'

const DropDown = ({toggle,setToggle}) => {
    const [togglePorfile, setTogglePorfile] = useState(false)
  return (
    <>
    <div className="flex relative items-center md:order-2">
      <button type="button" onClick={()=>setTogglePorfile(!togglePorfile)} className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 dark:bg-white" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        <span className="sr-only">Open user menu</span>
        {/* <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/> */}
        <div className="w-8 h-8 rounded-full"></div>
      </button>
      {/* -- Dropdown menu -- */}
      <div className={`z-50 ${togglePorfile?"":"hidden"} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-6 right-0 transition-transform ease-linear duration-100`} id="user-dropdown">
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
          <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@gmail.com</span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
          </li>
          
          <li>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
      </div>
      {/* toggle  menu */}
      <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="w-5 h-5"/>

    </button>
  </div>

    </>
  );
};

export default DropDown;
