import { HashLink as Link } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div
      style={{ backgroundColor: 'transparent' }}
      className='absolute left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: 'white' }} className='font-bold md:text-3xl mont'>
            SIDHARDH C R
          </h1>
        </Link>
        <ul style={{ color: 'white' }} className='mont hidden sm:flex'>
          <li className='p-4  hover:underline decoration-[#571DB5] underline-offset-[15px] '>
            <Link to='#home' smooth>Home</Link>
          </li>
          <li className='p-4 hover:underline decoration-[#571DB5] underline-offset-[15px]'>
            <Link to='#about' smooth>About</Link>
          </li>
          <li className='p-4 hover:underline decoration-[#571DB5] underline-offset-[15px]'>
            <Link to='#skill' smooth>Skill</Link>
          </li>
          <li className='p-4 hover:underline decoration-[#571DB5] underline-offset-[15px]'>
            <Link to='#experience' smooth>Experience</Link>
          </li>

          <li className='p-4 hover:underline decoration-[#571DB5] underline-offset-[10px]'>
            <Link to='#contact' smooth>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: 'white' }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: 'white' }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 mont text-2xl hover:text-[#571DB5]'>
            <Link to='#home' smooth className=''>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 mont text-2xl hover:text-[#571DB5]'>
            <Link to='#about' smooth>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 mont text-2xl hover:text-[#571DB5]'>
            <Link to='#skill' smooth>Skill</Link>
            </li>
            <li onClick={handleNav} className='p-4 mont text-2xl hover:text-[#571DB5]'>
            <Link to='#experience' smooth>Experience</Link>
            </li>
            <li onClick={handleNav} className='p-4 mont text-2xl hover:text-[#571DB5]'>
            <Link to='#contact' smooth>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;