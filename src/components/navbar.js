import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import logo from './images/logo.png'

function Navbar() {

    let [menu, setmenu] = useState(false);

    let toogle = () => {
        setmenu(!menu);
    }

    return (
        <>
            {/* Mobile view */}
            <div className={menu ? 'h-screen w-full bg-[#142740fd] p-5 fixed z-10' : 'hidden'}>
                <IoClose onClick={toogle} color="white" className='float-right lg:hidden h-10 w-10' />
                <ul className='text-xl font-semibold flex flex-col mt-16 items-center w-full'>
                    <a href="" className='w-full'>
                        <li className='px-4 hover:text-[#d8b859] text-white mt-5  text-center py-3' onClick={toogle}>
                            Home
                        </li>
                    </a>
                    <a href="" className='w-full'>
                        <li className='px-4 hover:text-[#d8b859] text-white mt-5  text-center py-3' onClick={toogle}>
                            Players
                        </li>
                    </a>
                    <a href="" className='w-full'>
                        <li className='px-4 hover:text-[#d8b859] text-white mt-5  text-center py-3' onClick={toogle}>
                            Matches
                        </li>
                    </a>
                    <a href="" className='w-full'>
                        <li className='px-4 hover:text-[#d8b859] text-white mt-5  text-center py-3' onClick={toogle}>
                            News
                        </li>
                    </a>
                    <a href="" className='w-full'>
                        <li className='px-4 hover:text-[#d8b859] text-white mt-5  text-center py-3' onClick={toogle}>
                            Gallery
                        </li>
                    </a>
                </ul>
            </div>

            <div className='m-0 flex justify-between items-center py-1 w-full'>
                <img src={logo} alt="Logo" className='h-24 px-4'/>
                <IoMenu onClick={toogle} color="white" className='float-right lg:hidden mr-2 h-9 w-9' />
                <ul className='lg:flex font-semibold text-xl justify-center items-center hidden p-2'>
                    <li className='px-4 hover:text-[#d8b859] text-white transition-all duration-300'>
                        <a href="">Home</a>
                    </li>
                    <li className='px-4 hover:text-[#d8b859] text-white transition-all duration-300'>
                        <a href="">Players</a>
                    </li>
                    <li className='px-4 hover:text-[#d8b859] text-white transition-all duration-300'>
                        <a href="">Matches</a>
                    </li>
                    <li className='px-4 hover:text-[#d8b859] text-white transition-all duration-300'>
                        <a href="">News</a>
                    </li>
                    <li className='px-4 hover:text-[#d8b859] text-white transition-all duration-300'>
                        <a href="">Gallery</a>
                    </li>
                </ul>
            </div>
        </>

    );
}

export default Navbar
