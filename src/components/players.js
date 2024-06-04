import React from 'react'
import Slider from "react-slick";
import AbhinavManohar from './images/AbhinavManohar.png'
import DavidMiller from './images/DavidMiller.png'
import KaneWilliamson from './images/KaneWilliamson.png'
import SaiSudharsan from './images/SaiSudharsan.png'
import ShubmanGill from './images/ShubmanGill.png'
import AzmatullahOmarzai from './images/AzmatullahOmarzai.png'
import RahulTewatia from './images/RahulTewatia.png'
import MohitSharma from './images/MohitSharma.png'
import WriddhimanSaha from './images/WriddhimanSaha.png'
import RashidKhan from './images/RashidKhan.png'
import SpencerJohnson from './images/SpencerJohnson.png'
import umeshYadav from './images/umeshYadav.png'

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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={AbhinavManohar} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Abhinav Manohar</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">19</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">231</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">43</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={DavidMiller} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>David Miller</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">130</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">2924</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">101*</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={KaneWilliamson} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Kane Williamson</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">79</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">2128</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">89</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={SaiSudharsan} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Sai Sudharsan</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">25</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">1034</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">103</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={ShubmanGill} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Shubman Gill</p>
                  <p className='text-center text-base font-bold w-full'>Batsman</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">103</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">3216</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">129</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={AzmatullahOmarzai} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Azmatullah</p>
                  <p className='text-center text-base font-bold w-full'>All Rounders</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">7</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">42</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">4</div>
                      <div className="md:text-xl text-base">Wickets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3 bg-[#142740] text-[#d8b859] rounded-2xl'>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={RahulTewatia} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Rahul Tewatia</p>
                  <p className='text-center text-base font-bold w-full'>All Rounders</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">12</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">188</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">0</div>
                      <div className="md:text-xl text-base">Wickets</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='p-3 bg-[#142740] text-[#d8b859] rounded-2xl'>
          <div className='flex flex-col items-center w-full rounded-lg  md:flex-row '>
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={WriddhimanSaha} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Wriddhiman Saha</p>
                  <p className='text-center text-base font-bold w-full'>Wicket Keeper</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">170</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">2934</div>
                      <div className="md:text-xl text-base">Runs</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">115*</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={MohitSharma} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Mohit Sharma</p>
                  <p className='text-center text-base font-bold w-full'>Bowler</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">111</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">132</div>
                      <div className="md:text-xl text-base">Wickets</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">5/10</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={RashidKhan} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Rashid Khan</p>
                  <p className='text-center text-base font-bold w-full'>Bowler</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">121</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">149</div>
                      <div className="md:text-xl text-base">Wickets</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">4/24</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={SpencerJohnson} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Spencer Johnson</p>
                  <p className='text-center text-base font-bold w-full'>Bowler</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">5</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">4</div>
                      <div className="md:text-xl text-base">Wickets</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">2/25</div>
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
            <img className="object-cover rounded-t-lg w-96 md:rounded-none md:rounded-s-lg" src={umeshYadav} alt="" />
            <div className="w-full  rounded-lg ">
              <div id="fullWidivhTabContent" className="">
                <div className="hidiven p-4 rounded-lg md:p-8 pb-0 " id="stats" role="tabpanel" aria-labelledby="stats-tab">
                  <p className='text-center md:text-[2rem] text-2xl font-bold m-2 w-full'>Umesh Yadav</p>
                  <p className='text-center text-base font-bold w-full'>Bowler</p>
                  <div className="flex justify-evenly flex-wrap items-center px-4 mx-auto sm:grid-cols-3 xl:grid-cols-6 sm:p-8">
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">147</div>
                      <div className="md:text-xl text-base">Matches</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">144</div>
                      <div className="md:text-xl text-base">Wickets</div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-40 my-2">
                      <div className="mb-2 md:text-3xl text-xl font-semibold">4/23</div>
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
