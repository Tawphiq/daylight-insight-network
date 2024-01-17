import React from 'react'

function Home() {
  return (
        <div className='text-white mt-20 mb-20 lg:mb-52 grid justify-start p-5 lg:justify-center lg:px-40'>
          <h1 className=' text-2xl lg:text-5xl font-nunito font-extrabold lg:mt-0'>Daylight Insights Network</h1>
          <div className='lg:grid lg:grid-cols-2 mt-1 lg:mt-8'>
          <p className=' text-lg lg:text-2xl'>Daylight Insights Network is all about shining a spotlight on great talents and brands in Africa and beyond.</p>
          <div className='grid grid-rows-2 gap-5 lg:px-10'>
          <button className='bg-amber-300 p-4 uppercase font-bold'>Explore our Events</button>
          <button className='bg-sky-300 p-4 uppercase font-bold'>About Us</button>
          </div>
          </div>
        </div>
  )
}

export default Home