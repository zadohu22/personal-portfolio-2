import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    // <footer className='footer items-center p-4 bg-neutral text-neutral-content'>
    //   <div className='items-center grid-flow-col'>
    //     <div className='text-3xl font-bold flex gap-1 ml-12 cursor-default'>
    //       <span className='text-primary'>Z</span>
    //       <span className='text-slate-303'>H</span>
    //     </div>
    //   </div>
    //   <p className='hidden place-self-center'>
    //     Website designed and coded by Zachary Hurst.
    //   </p>
    //   <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end relative right-12'>
    //     <a href='https://www.github.com/zadohu22' target='_blank'>
    //       <SiLinkedin className='text-3xl hover:text-primary cursor-pointer' />
    //     </a>

    //     <a href='https://www.github.com/zadohu22' target='_blank'>
    //       <SiGithub className='text-3xl hover:text-primary cursor-pointer' />
    //     </a>
    //   </div>
    // </footer>

    <footer className='h-[5em] flex justify-between items-center border-t-2'>
      <div className='text-3xl font-bold flex gap-1 ml-12 cursor-default'>
        <span className='text-primary'>Z</span>
        <span className='text-slate-303'>H</span>
      </div>
      <div className='flex gap-4 mr-16'>
        <a href='https://www.github.com/zadohu22' target='_blank'>
          <SiLinkedin className='text-3xl hover:text-primary cursor-pointer' />
        </a>

        <a href='https://www.github.com/zadohu22' target='_blank'>
          <SiGithub className='text-3xl hover:text-primary cursor-pointer' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
