import React from 'react'
import cskLogo from './images/csk.png'
import Slider from "react-slick";

function Schedule() {
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
        <div className='m-5 bg-[#22426b] py-4 pb-10 px-4 rounded-2xl'>
            <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2'>Match Schedule</p>

            <Slider {...settings}>
                
                <div className='bg-[#142740] w-96 md:p-5 p-0 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                230/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                200/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        Chennai super kings beat Gujarat titans by 20 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                      Match 34, 04 May 2024 | 19:30  
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 p-0 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                230/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                200/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        Chennai super kings beat Gujarat titans by 20 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                      Match 34, 04 May 2024 | 19:30  
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 p-0 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                230/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                200/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        Chennai super kings beat Gujarat titans by 20 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                      Match 34, 04 May 2024 | 19:30  
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
            </Slider>                

            
        </div>
    )
}

export default Schedule
