import React from 'react'
import milogo from './images/mi.png'
import gtlogo from './images/logo.png'
import cskLogo from './images/csk.png'
import srhlogo from './images/srh.png'
import dclogo from './images/dclogo.png'
import kkrlogo from './images/kkrlogo.png'
import lsglogo from './images/lsglogo.png'
import pklogo from './images/pklogo.png'
import rcblogo from './images/rcblogo.png'
import rrlogo from './images/rrlogo.png'
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
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                168/6 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={milogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                162/9 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        GT won by 6 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 05, 24 Mar 2024
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                206/6 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                143/8 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        CSK won by 63 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 07, 26 May 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={srhlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                162/8 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                168/3 <span className='text-xs'>(19.1)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        GT won by 7 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 12, 31 Mar 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                199/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={pklogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                200/7 <span className='text-xs'>(19.5)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        PBKS by 3 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 17, 04 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={lsglogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                163/5 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                130/10 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                    LSG won by 33 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 21, 07 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={rrlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                196/3 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                199/7 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        GT won by 3 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 24, 10 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                89/10 <span className='text-xs'>(17.3)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={dclogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                92/4 <span className='text-xs'>(8.5)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        DC won by 6 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 32, 17 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={pklogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                142/10 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                146/7 <span className='text-xs'>(19.1)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        GT won by 3 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 37, 21 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={dclogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                224/4 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                220/8 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        DC won by 4 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 40, 24 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                200/3 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={rcblogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                206/1 <span className='text-xs'>(16.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        RCB won by 9 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 45, 28 Apr 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                147/10 <span className='text-xs'>(19.3)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={rcblogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                152/6 <span className='text-xs'>(13.4)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        RCB won by 4 wickets.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 52, 04 May 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={kkrlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                231/3 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                196/8 <span className='text-xs'>(20.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        GT won by 35 runs.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 59, 10 May 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                0/0 <span className='text-xs'>(0.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={cskLogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                0/0 <span className='text-xs'>(0.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        No Result.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 63, 13 May 2024 
                    </p>

                    <button className='w-full bg-[#d8b859] py-1 my-2 text-[#142740] font-semibold rounded-lg'>
                        Scorecard
                    </button>
                </div>
                <div className='bg-[#142740] w-96 md:p-5 px-2 py-5 rounded-2xl shadow-md shadow-[#131212] my-5 '>
                    <div className='w-full flex items-center justify-center flex-wrap sm:flex-row flex-col my-2'>
                        <div className='flex items-center justify-evenly'>
                            <img src={srhlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                0/0 <span className='text-xs'>(0.0)</span>
                            </p>
                        </div>
                        <p>vs</p>
                        <div className='flex items-center justify-evenly flex-row sm:flex-row-reverse'>
                            <img src={gtlogo} alt="" className='h-10' />
                            <p className='text-lg font-semibold mx-3'>
                                0/0 <span className='text-xs'>(0.0)</span>
                            </p>
                        </div>
                    </div>

                    <p className='text-center pt-4 px-2'>
                        No Result.
                    </p>

                    <p className='text-center text-sm my-3'>
                        Match 66, 16 May 2024 
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
