import React from "react";
import face from "../media/received_787813755812499.jpeg";
import Slider from "./Slider";

const About = () => {
  return (
    <div className='w-full h-auto about-container '>
      <Slider />
      <div className='w-full h-auto flex flex-col px-2 md:mt-24 lg:px-12'>
        <div className='w-full h-full flex flex-col justify-center items-center px-6 py-6 gap-12'>
          <h2 className='text-5xl text-secondary font-bold  place-self-center flex-1'>
            About Me
          </h2>
          <img
            src={face}
            alt='head shot'
            className='w-[10em] h-[10em] object-cover mask mask-hexagon-2'
          />
          <p className='flex-1 text-left text-secondary mt-8 relative bottom-8 md:bottom-4 md:mb-[8rem] leading-10 text-xl max-w-[80%] xl:max-w-[60%]'>
            Hello my name is{" "}
            <span className='text-primary font-bold'>Zach</span>, and I'm a
            front end React developer. After years in the customer service
            industry, I decided that I wanted to a more creative and fulfilling
            career, so I started learning web development and immediately fell
            in love with it.
          </p>
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center'>
          <h2 className='text-5xl text-secondary h-auto font-bold place-self-center'>
            Skills
          </h2>
          <div className='flex gap-8 text-center flex-1 mt-20 '>
            <div className='border-r-2  md:border-l-0 border-slate-300 pr-4'>
              <h3 className=' text-2xl font-bold underline text-secondary '>
                Experienced
              </h3>
              <ul className='mt-4 flex flex-col gap-2 font-bold text-xl text-secondary'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>ReactJS</li>
                <li>Tailwind</li>
                <li>Github</li>
                <li>Firebase</li>
              </ul>
            </div>

            <div className='w-full'>
              <h3 className=' text-2xl font-bold underline'>In progress</h3>
              <ul className='mt-4 flex flex-col gap-2 font-bold text-xl'>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Express</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
