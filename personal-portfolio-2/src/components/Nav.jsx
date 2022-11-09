/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <>
      <header className='p-4 text-slate-300 w-full sticky top-0 bg-transparent z-10 navbar-container'>
        <div className='flex justify-between h-16 w-full'>
          {/* mx-auto ^^ */}
          <Link
            activeClass='active'
            to='sectionOne'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className='flex items-center px-4 mb-1 border-b-2 border-transparent relative left-12 text-slate-300 cursor-pointer hover:text-primary'
          >
            <div className='text-3xl font-bold flex gap-1'>
              <span className='text-primary'>Z</span>
              <span className='text-slate-303'>H</span>
            </div>
          </Link>

          <ul className='items-stretch hidden space-x-3 md:flex relative right-12'>
            <li className='flex'>
              <Link
                activeClass='active'
                to='sectionOne'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='flex items-center px-4 mb-1 border-b-2 border-transparent text-slate-300 cursor-pointer hover:text-primary hover:border-primary'
              >
                Home
              </Link>
            </li>
            <li className='flex'>
              <Link
                activeClass='active'
                to='sectionTwo'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='flex items-center px-4 mb-1 border-b-2 border-transparent text-slate-300 cursor-pointer hover:text-primary hover:border-primary'
              >
                About
              </Link>
              {/* <a
								rel='noopener noreferrer'
								href='#'
								className='flex items-center px-4 -mb-1 border-b-2 border-transparent text-slate-300 hover:text-primary hover:border-primary'
							>
								About
							</a> */}
            </li>
            <li className='flex'>
              <Link
                activeClass='active'
                to='sectionThree'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className='flex items-center px-4 mb-1 border-b-2 border-transparent text-slate-300 cursor-pointer hover:text-primary hover:border-primary'
              >
                Projects
              </Link>
            </li>
            <li className='flex'>
              <a
                rel='noopener noreferrer'
                href='#'
                className='flex items-center px-4 mb-1 border-b-2 border-transparent text-slate-300 hover:text-primary hover:border-primary'
              >
                Contact
              </a>
            </li>
          </ul>
          {mobileNavOpen ? (
            <AiOutlineClose
              onClick={handleClick}
              className='w-6 h-6 flex justify-end self-center relative right-8 md:hidden z-10 cursor-pointer'
            />
          ) : (
            <button
              onClick={handleClick}
              className='flex justify-end self-center relative right-4 p-4 md:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
          )}
        </div>
      </header>

      {mobileNavOpen && (
        <div className='mobile-nav-drawer w-[90%] fixed right-0 top-20 bg-black opacity-90 z-[10]'>
          <ul className='w-full flex flex-col justify-center items-center text-white'>
            <li className='mobile-nav-link'>
              <Link
                activeClass='active'
                to='sectionOne'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                <h3 className='h-full w-full text-center justify-self-center'>
                  Home
                </h3>
              </Link>
            </li>

            <li className='mobile-nav-link'>
              <Link
                activeClass='active'
                to='sectionTwo'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                About
              </Link>
            </li>

            <li className='mobile-nav-link'>
              <Link
                activeClass='active'
                to='sectionThree'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                Projects
              </Link>
            </li>
            <li className='mobile-nav-link'>
              <Link
                activeClass='active'
                to='sectionFour'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={handleClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Nav;
