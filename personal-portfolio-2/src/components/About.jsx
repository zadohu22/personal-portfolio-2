import React from "react";
import face from "../media/received_787813755812499.jpeg";

const About = () => {
  return (
    <div className='w-full h-auto md:h-[40em] grid grid-cols-1 px-2 md:grid-cols-2 md:mt-24 lg:px-12'>
      <div className='w-full h-full flex flex-col justify-center items-center px-6 py-20 gap-12'>
        <h2 className='text-5xl font-bold underline place-self-center flex-1'>
          About Me
        </h2>
        <img
          src={face}
          alt='head shot'
          className='w-[10em] h-[10em] object-cover mask mask-hexagon-2'
        />
        <p className='flex-1 text-left mt-8 relative bottom-8 md:bottom-4 md:mb-[8rem] leading-8 text-xl'>
          Hello my name is <span className='text-primary'>Zach</span>, and I'm a
          front end React developer. After a long time in the customer service
          industry I decided that I wanted to find a career that was more
          <span className='text-primary'> fulfilling</span>, so I started
          learning web development and immediately fell in{" "}
          <span className='text-primary'> love</span> with it.
        </p>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center md:px-6 md:py-20 '>
        <h2 className='text-5xl h-auto font-bold underline place-self-center'>
          Skills
        </h2>
        <div className='flex gap-8 text-center flex-1 mt-20 '>
          <div className='border-r-2  md:border-l-0 border-slate-300 pr-4'>
            <h3 className='underline text-2xl font-bold '>Experienced</h3>
            <ul className='mt-4 flex flex-col gap-2 font-bold text-xl'>
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
            <h3 className='underline text-2xl font-bold'>In progress</h3>
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
  );
};

export default About;
