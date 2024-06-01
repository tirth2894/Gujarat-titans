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
      <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2'>Players</p>

      <Slider {...settings}>
        
        <div className=''>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-auto w-80 md:rounded-none md:rounded-s-lg" src={photo} alt="" />
            <div className="w-full  rounded-lg   ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <div className="flex justify-evenly flex-wrap items-center p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">73M+</div>
                      <div className="text-gray-500 ">Developers</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">100M+</div>
                      <div className="text-gray-500 ">Public repositories</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">1000s</div>
                      <div className="text-gray-500 ">Open source projects</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">1B+</div>
                      <div className="text-gray-500 ">Contributors</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">90+</div>
                      <div className="text-gray-500 ">Top Forbes companies</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">4M+</div>
                      <div className="text-gray-500 ">Organizations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=''>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-auto w-80 md:rounded-none md:rounded-s-lg" src={photo} alt="" />
            <div className="w-full  rounded-lg   ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <div className="flex justify-evenly flex-wrap items-center p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">73M+</div>
                      <div className="text-gray-500 ">Developers</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">100M+</div>
                      <div className="text-gray-500 ">Public repositories</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">1000s</div>
                      <div className="text-gray-500 ">Open source projects</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">1B+</div>
                      <div className="text-gray-500 ">Contributors</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">90+</div>
                      <div className="text-gray-500 ">Top Forbes companies</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">4M+</div>
                      <div className="text-gray-500 ">Organizations</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg h-96 md:h-auto md:w-auto w-80 md:rounded-none md:rounded-s-lg" src={photo} alt="" />
            <div className="w-full  rounded-lg   ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <div className="flex justify-evenly flex-wrap items-center p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">73M+</div>
                      <div className="text-gray-500 ">Developers</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">100M+</div>
                      <div className="text-gray-500 ">Public repositories</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">1000s</div>
                      <div className="text-gray-500 ">Open source projects</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">1B+</div>
                      <div className="text-gray-500 ">Contributors</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">90+</div>
                      <div className="text-gray-500 ">Top Forbes companies</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 ">
                      <div className="mb-2 text-3xl font-extrabold">4M+</div>
                      <div className="text-gray-500 ">Organizations</div>
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
