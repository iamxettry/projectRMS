import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import {HiMoon} from 'react-icons/hi'
import {FiSun} from 'react-icons/fi'
const Main = ({darkToggle,setDarkToggle}) => {
  return (
    <>
      <div className={`dark:bg-gray-800 dark:border-b-slate-300 border-b-2 dark:border-opacity-30 py-2 bg-green-50 `}>
        <div className="container mx-auto flex justify-end items-center  ">
          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            onClick={() => setDarkToggle(!darkToggle)}
          >
            <HiMoon id="theme-toggle-dark-icon"
              className={` w-5 h-5 ${darkToggle?'hidden':'flex'}`}
              fill="currentColor"
              viewBox="0 0 20 20"/>
            
            <FiSun  id="theme-toggle-light-icon"
              className={` w-5 h-5 ${darkToggle?'flex':'hidden'}`}
              fill="currentColor"
              viewBox="0 0 20 20"/>
            
          </button>
        </div>
      </div>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Main;
