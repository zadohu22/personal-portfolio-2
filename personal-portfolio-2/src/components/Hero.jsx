import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className='hero h-screen' id='sectionOne'>
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
    </div>
  );
};

export default Hero;
