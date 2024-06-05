import React from 'react'
import Slider from "react-slick";
import newsphtoto1 from './images/news1.png'
import newsphtoto2 from './images/news2.png'
import newsphtoto3 from './images/news3.png'
import newsphtoto4 from './images/news4.png'

function News() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  };
  return (
    <div className='m-5 bg-[#22426b] px-4 py-4 pb-10 rounded-2xl' id='news'>
      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2'>Latest News</p>

      <Slider {...settings}>

        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300 '>
          <img src={newsphtoto1} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            Croma presents a training session with the Titans
          </p>
        </div>
        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={newsphtoto2} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            GT Show Support for Cancer Awareness
          </p>
        </div>
        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={newsphtoto3} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            SRHvGT-Rain Has the Final Word
          </p>
        </div>
        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={newsphtoto4} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            Sai Su and Shahrukh Stand Tall in Loss to RCB
          </p>
        </div>
      </Slider>



    </div>
  )
}

export default News
