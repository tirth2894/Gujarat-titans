import React from 'react'
import Slider from "react-slick";
import photo from './images/csk.png'

function Players() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (

    <div className='m-5 bg-[#22426b] px-4 py-4 pb-10 rounded-2xl'>
      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mb-4'>Players</p>

      <Slider {...settings}>
        
      <div className='p-3 bg-[#142740] text-[#d8b859] rounded-2xl'>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src={photo} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-3xl font-bold m-2 w-full'>Tirth patel</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">73M+</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">100M+</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">1000s</div>
                      <div className="md:text-xl text-base">Best</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3 bg-[#142740] text-[#d8b859] rounded-2xl'>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src={photo} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-3xl font-bold m-2 w-full'>Tirth patel</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">73M+</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">100M+</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">1000s</div>
                      <div className="md:text-xl text-base">Best</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3 bg-[#142740] text-[#d8b859] rounded-2xl'>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg h-full md:rounded-none md:rounded-s-lg" src={photo} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-3xl font-bold m-2 w-full'>Tirth patel</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">73M+</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">100M+</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">1000s</div>
                      <div className="md:text-xl text-base">Best</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   
      </Slider>
    </div>
  );
}

export default Players
