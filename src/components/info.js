import React from 'react'
import teamPhoto from './images/titanSquad1.png'

function Info() {
  return (
    <div className='flex py-7 flex-wrap-reverse w-full justify-evenly items-center overflow-hidden' >

      <div className='my-5 mx-2 flex flex-col justify-center items-start' >
        <p className='text-2xl md:text-3xl text-center'>
          The <span className='block text-3xl md:text-4xl font-bold text-[#d8b859]'>Titans squad</span>
        </p>
        <p className='text-xl md:text-2xl'>

        </p>
      </div>


      <div className='h-[23rem] flex justify-center items-center'>
        <img src={teamPhoto} alt='UserPhoto' className='h-full' />
      </div>

    </div>
  )
}

export default Info
