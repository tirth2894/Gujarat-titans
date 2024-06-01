import React from 'react'
import photo from './images/csk.png'
import Slider from "react-slick";

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
    <div className='m-5 bg-[#22426b] px-4 py-4 pb-10 rounded-2xl'>
      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2'>Latest News</p>

      <Slider {...settings}>

        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5'>
          <img src={photo} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde nobis nihil accusantium quaerat, et commodi repellendus laboriosam tempora qui fugit esse. Hic corporis aspernatur aut et vero quidem eos quas a eius cum.
          </p>
        </div>
        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5'>
          <img src={photo} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde nobis nihil accusantium quaerat, et commodi repellendus laboriosam tempora qui fugit esse. Hic corporis aspernatur aut et vero quidem eos quas a eius cum.
          </p>
        </div>
        <div className='bg-[#142740] w-96 p-5 rounded-2xl shadow-md shadow-[#131212] my-5'>
          <img src={photo} alt="" className='w-full h-2/3' />
          <p className='my-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, unde nobis nihil accusantium quaerat, et commodi repellendus laboriosam tempora qui fugit esse. Hic corporis aspernatur aut et vero quidem eos quas a eius cum.
          </p>
        </div>
      </Slider>



    </div>
  )
}

export default News
