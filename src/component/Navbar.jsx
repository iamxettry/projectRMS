import React, { useState } from "react";
import { Navlink } from "../constant/Navlinks";
import { Link, NavLink } from "react-router-dom";
import DropDown from "./DropDown";
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center" onClick={()=>setToggle(false)}>
            {/* <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Bubble<span className="text-orange-500">Dubble.</span>
            </span>
          </Link>
          <DropDown toggle={toggle} setToggle={setToggle}/>
          {/* Navlinks */}
          <div
            className={`items-center justify-between  w-full md:flex md:w-auto md:order-1 ${toggle?"":"hidden"}`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              {Navlink.map((navitems, index) => (
                <li className="" key={index} onClick={()=>setToggle(false)}>
                  <NavLink
                    to={navitems.path}
                    className={({ isActive }) =>
                      isActive ?"md:text-orange-600 bg-green-700 md:bg-transparent hover:text-black dark:md:text-orange-500 text-white md:hover:text-orange-500 block py-2 pl-3 pr-4 rounded md:py-0 md:pr-0 md:pl-0" : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 rounded hover:bg-gray-50 md:bg-transparent md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"}
                      aria-current="page"
                  >
                    {navitems.title}
                  </NavLink>
                </li>
              ))}
             
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
