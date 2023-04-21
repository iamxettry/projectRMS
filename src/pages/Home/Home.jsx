import React from 'react'
import Hero from '../../component/Hero'
import InfoCard from '../../component/InfoCard'
const Home = () => {
  return (
    <>
    <div className='dark:bg-gray-800'>
      {/* hero section */}
      <Hero/>
      <div className='w-full my-10'>
        <div className='w-4/5 md:w-full mx-auto flex flex-wrap justify-center items-center py-6'>
          <InfoCard/>
          

        </div>
      </div>
    </div>
    </>
  )
}

export default Home