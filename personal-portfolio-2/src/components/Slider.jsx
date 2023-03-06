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
            <SiHtml5 className='tech-icons' />
            <SiCss3 className='tech-icons' />
            <SiJavascript className='tech-icons' />
          </div>
          <div className='flex text-center h-4em justify-center items-center gap-10'>
            <SiReact className='tech-icons' />
            <SiTailwindcss className='tech-icons' />
            <SiGithub className='tech-icons' />
          </div>

          <div className='flex text-center h-4em justify-center items-center gap-10'>
            <SiNodedotjs className='tech-icons' />
            <SiMongodb className='tech-icons' />
            <SiFirebase className='tech-icons' />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
