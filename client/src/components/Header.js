import React, { useState } from 'react';

// import components
import logo from "../imgs/logo.avif";
import Nav from './Nav';
import NavMobile from './NavMobile';

// import icons
import { FaBars } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className='mb-12 lg:mb-0 z-20 relative px-4 lg:px-0'
      data-aos='fade-down'
      data-aos-delay='1200'
      data-aos-duration='1000'
    >
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[120px]'>
            {/* logo */}
            <a href='/'>
              <img src={logo} alt='' className='w-48 h-48 rounded-full' />
            </a>
            {/* nav / initially hidden / show on large screens  */}
            <div className='hidden lg:flex'>
              <Nav />
            </div>

            
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div
            className={`${
              navMobile ? 'max-h-52' : 'max-h-0'
            } lg:hidden absolute top-24 w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          <button className='btn btn-quaternary flex items-center gap-x-[20px] group bg-[#6e9529] p-3 rounded-md text-white  '>
            Request Demo
            <BsArrowRight className='text-2xl text-white transition' />
          </button>
          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className='text-2xl text-primary cursor-pointer lg:hidden'
          >
          <svg
                className="fill-stroke"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
