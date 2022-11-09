import React from "react";
import { Carousel } from "flowbite-react";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const Slider = () => {
  return (
    <>
      <div
        className='h-32 bg-transparent text-[#20201F] cursor-default'
        id='sectionTwo'
      >
        <Carousel
          className='text-center bg-transparent px-8 cursor-default'
          slideInterval={1500}
          leftControl='_'
          indicators={false}
        >
          <div className='flex text-center h-4em justify-center items-center gap-10'>
            <SiHtml5 className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
            <SiCss3 className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
            <SiJavascript className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
          </div>
          <div className='flex text-center h-4em justify-center items-center gap-10'>
            <SiReact className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
            <SiTailwindcss className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
            <SiGithub className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
          </div>

          <div className='flex text-center h-4em justify-center items-center gap-10'>
            <SiNodedotjs className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
            <SiMongodb className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
            <SiFirebase className='text-slate-300 w-24 h-24 mb-8 cursor-default' />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
