import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-ful text-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto lg:grid grid-cols-3 '>
        <div className='lg:col-span-2'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl  py-2'>Want tips & tricks to optimize your flow?</h1>
          <p className=' py-3'>Sign up to our newsletter and stay upto date.</p>
        </div>

        <div className='my-4'>
          <div className='flex flex-col justify-between items-center w-full sm:flex-row'>
          <input className='p-3 h-14 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
          <button className='bg-[#00df9a] w-[200px] text-black font-bold rounded-md ml-3 my-6 items-center p-4'>Notify Me</button>
          </div>
        </div>

        <div className='w-full flex item-right'>
        <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy polocy</span></p>
        </div>

      </div>
    </div>
  )
}

export default Newsletter