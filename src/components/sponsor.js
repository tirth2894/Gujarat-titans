import React from 'react'
import dream11 from './images/dream11.png'
import capri from './images/capri.png'
import bkt from './images/BKT.jpg'
import jio from './images/jio.png'
import astralPiple from './images/astralPipes.png'
import simpolo from './images/simpolo.png'
import acko from './images/acko.png'
import lubiPumps from './images/lubiPumps.png'
import rayzon from './images/rayzon.png'
import jioCinema from './images/jioCinema.png'
import bisleri from './images/bisleri.png'
import croma from './images/croma.png'
import havmor from './images/havmor.png'
import boat from './images/boat.png'
import mirchi from './images/mirchi.png'
import fever from './images/fever.png'
import paytm from './images/paytm.png'
import paytmInsider from './images/paytmInsider.png'

function Sponsor() {
  return (
    <div className='flex flex-col justify-center items-center mx-5 mt-5 bg-[#22426b] px-4 py-4 pb-10 rounded-2xl'>
      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mt-4'>Principal Partner</p>
      <div className='flex items-center justify-evenly flex-wrap'>
        <img src={dream11} alt="" className='h-16 my-4 mx-2 bg-white' />
      </div>

      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mt-4'>Associate Partners</p>
      <div className='flex items-center justify-evenly flex-wrap'>
        <img src={capri} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={bkt} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={jio} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={astralPiple} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={simpolo} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={acko} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={lubiPumps} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={rayzon} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
      </div>

      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mt-4'>Official Partners</p>
      <div className='flex items-center justify-evenly flex-wrap'>
        <img src={jioCinema} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={bisleri} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={havmor} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={croma} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={boat} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
      </div>

      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mt-4'>Radio Partners</p>
      <div className='flex items-center justify-evenly flex-wrap'>
        <img src={mirchi} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={fever} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
      </div>

      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mt-4'>Exclusive Ticketing Partners</p>
      <div className='flex items-center justify-evenly flex-wrap'>
        <img src={paytmInsider} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
        <img src={paytm} alt="" className='h-16 w-28 my-4 mx-2 bg-white' />
      </div>
    </div>
  )
}

export default Sponsor
