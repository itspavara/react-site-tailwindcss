import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast,flexible financing for</p>
          <TypeAnimation
            sequence={[
              'BTB', // Types 'BTB'
              2000, // Waits 2s
              'BTC', // Deletes 'BTB' and types 'BTC'
              2000, // Waits 2s
              'SASS', // Types 'SASS' without deleting 'BTC'
              2000,
            ]}
            wrapper="span"
            cursor={true}

            repeat={Infinity}
            className='md:text-4xl sm:text-3xl text-xl font-bold pl-2'
          />
        </div>
        <p className='font-bold md:text-2xl text-xl text-gray-500'>Monitor your data analythics to increase revenue for BTB,BTC,&SASS platforms</p>
        <button className='bg-[#00df9a] w-[200px] text-black font-bold rounded-md my-6 items-center p-4'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero