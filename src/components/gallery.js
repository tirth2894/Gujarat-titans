import React from 'react'
import Slider from "react-slick";
import gallery1 from './images/gallery1.png'
import gallery2 from './images/gallery2.png'
import gallery3 from './images/gallery3.png'
import gallery4 from './images/gallery4.png'



function Gallery() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
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
    <div className='m-5 bg-[#22426b] px-4 py-4 pb-10 rounded-2xl' id='gallery'>
      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2'>Gallery</p>

      <Slider {...settings}>

        <div className='bg-[#142740] p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={gallery1} alt="" className='h-48 w-full' />
        </div>

        <div className='bg-[#142740] p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={gallery2} alt="" className='h-48 w-full' />
        </div>

        <div className='bg-[#142740] p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={gallery3} alt="" className='h-48 w-full' />
        </div>

        <div className='bg-[#142740] p-5 rounded-2xl shadow-md shadow-[#131212] my-5 hover:scale-105 transition-transform duration-300'>
          <img src={gallery4} alt="" className='h-48 w-full' />
        </div>

      </Slider>



    </div>
  )
}

export default Gallery
