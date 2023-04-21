import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { CardInfo } from "../constant";
const InfoCard = () => {
  return (
    <>
      {CardInfo.map(({title,id,desc,btn,logo}) => (
        <div className="p-4" key={id}>
          <div className="w-[500px] md:w-auto md:max-w-xs px-4 py-4 bg-white border hover:border-orange-400 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:shadow-md dark:shadow-orange-500 dark:drop-shadow-2xl drop-shadow-md flex flex-col gap-5 justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <GiForkKnifeSpoon className="text-5xl text-gray-400" />
              {logo}
            </div>

            <h5 className="mb-2 text-2xl md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p className="mb-3 text-center md:text-left font-normal text-gray-500 dark:text-gray-400">
              {desc.d1}<br className="hidden md:flex" />{desc.d2}<br className="hidden md:flex" />{desc.d3}
            </p>
            <div className="w-full flex justify-center items-center">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-pink-500 group-hover:from-orange-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  <a href="#" className="uppercase">
                    {btn}
                    
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoCard;
