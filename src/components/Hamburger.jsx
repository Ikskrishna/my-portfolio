import React, { useState } from 'react'
import { Link } from 'react-router';

const Hamburger = () => {

    const [open,setOpen] =useState();

    const toggleMenu =()=>{
        setOpen(!open);
    };

  return (
    <div className='relative sm:hidden left-28'>
        <button
            className='flex flex-col justify-between text-white items-center w-8 h-6 bg-transparent border-none space-y-1.5 focus:outline-none'
            onClick={toggleMenu}
        >
            <span className={`w-8 h-1 bg-[#FFE1A8] transition-all duration-300 `}></span>
            <span className={`w-8 h-1 bg-[#FFE1A8] transition-all duration-300 `}></span>
            <span className={`w-8 h-1 bg-[#FFE1A8] transition-all duration-300 `}></span>
        </button>
      
        <div className={`absolute top-12 right-11 px-2 text-[#FFE1A8] shadow-lg ${open ? 'block' : 'hidden'}`}>
         <ul className="flex  items-center py-2 px-4 gap-5">
              <li><Link to="/"  className="text-xl  hover:text-[#C09C58]">Home</Link></li>
              <li><Link to="/about"  className="text-xl  hover:text-[#C09C58]">About</Link></li>
              <li><Link to="/contact"  className="text-xl  hover:text-[#C09C58]">Contact</Link></li>
         </ul>
      </div>
    </div>
  )
}

export default Hamburger
