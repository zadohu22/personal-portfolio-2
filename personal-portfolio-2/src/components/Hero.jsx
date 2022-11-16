import React from "react";
import { Link } from "react-scroll";
import pattern from "../media/curveNegative.svg";

const Hero = () => {
  return (
    <div
      className='hero h-screen w-full hero-container flex flex-col justify-center items-center relative'
      id='sectionOne'
    >
      <div class='custom-shape-divider-bottom-1668563101'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold text-slate-300'>
            Hello, I'm <span className='text-primary'>Zach</span>.
          </h1>
          <p className='py-6 text-slate-300 font-bold'>
            Front-end web developer with a customer service background.
          </p>
          <Link
            activeClass='active'
            to='sectionThree'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <button className='btn max-w-64 h-12 text-[#0D0D0C] font-bold shadow-sm shadow-slate-300 bg-primary border-primary text-slate-80 hover:bg-transparent hover:shadow-none hover:text-primary'>
              Projects
            </button>
          </Link>
        </div>
      </div>

      {/* <img src={pattern} alt='' /> */}
    </div>
  );
};

export default Hero;
