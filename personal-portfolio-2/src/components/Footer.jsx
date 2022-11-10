import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer
      className='h-[5em] flex justify-between items-center border-t-2'
      id='sectionFour'
    >
      <div className='text-3xl font-bold flex gap-1 ml-20 cursor-default'>
        <span className='text-primary'>Z</span>
        <span className='text-slate-303'>H</span>
      </div>
      <div className='flex gap-4 mr-20'>
        <a
          href='https://www.github.com/zadohu22'
          rel='noreferrer'
          target='_blank'
        >
          <SiLinkedin className='text-3xl hover:text-primary cursor-pointer' />
        </a>

        <a
          href='https://www.github.com/zadohu22'
          rel='noreferrer'
          target='_blank'
        >
          <SiGithub className='text-3xl hover:text-primary cursor-pointer' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
