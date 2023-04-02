import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center '>
          <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analythics Centrally</h1>
          <p >
            Adipisicing reprehenderit exercitation reprehenderit laboris anim consequat
            mollit ipsum mollit Lorem nostrud. Esse ex do ut reprehenderit ad do. Sint
            ex sint duis eiusmod ex enim fugiat. Do magna esse pariatur est elit veniam
            non Lorem magna.
          </p>
          <div className='flex justify-center'>
            <button className='bg-black w-[200px] text-[#00df9a] font-bold rounded-md my-6 items-center p-4'>Get Started</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Analytics