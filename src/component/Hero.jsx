import React, { useState } from "react";
import { food1, food2, food3, food4 } from "../assets/index";
import {GrNext, GrPrevious} from 'react-icons/gr'
let slide = [food1, food2,food3];

const Hero = () => {
  const [cur, setCur] = useState(0);

  // function to change previous craousel image
  const prev = () => {
    setCur((cur) => (cur == 0 ? slide.length - 1 : cur - 1));
  };
  // function to change next craousel image
  const next = () => {
    setCur((cur) => (cur == slide.length - 1 ? 0 : cur + 1));
  };
//   setInterval(() => {
//     setCur((cur+1)%2)
//   }, 3000);
  return (
    <>
      <div className="relative w-full">
        {/* <!-- Carousel wrapper --> */}
        <div className="relative h-56 overflow-hidden rounded-b-lg sm:h-64 xl:h-[500px] xl:w-[96%] xl:mx-auto 2xl:h-96">
          <div
            className="flex transition-transform ease-linear duration-700"
            style={{ transform: `translateX(-${cur * 100}%)` }}
          >
            {slide.map((img, index) => (
              <img src={img} className=" block w-full " key={index} alt="" />
            ))}
          </div>
         
        </div>
        {/* <!-- Slider indicators --> */}
        
        {/* <!-- Slider controls --> */}
        <button
          id="data-carousel-prev"
          type="button"
          className="absolute top-0 left-0 xl:left-5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prev}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/60 dark:bg-gray-800/60 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-500/70 group-focus:outline-none">
           <GrPrevious className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"/>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          id="data-carousel-next"
          type="button"
          className="absolute top-0 right-0 xl:right-5 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={next}
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/60 dark:bg-gray-800/60 group-hover:bg-white/50 dark:group-hover:bg-gray-600/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-500/70  group-focus:outline-none">
            <GrNext  
               className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"/>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default Hero;
