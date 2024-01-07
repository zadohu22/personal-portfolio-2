import React from "react";
import face from "../media/received_787813755812499.jpeg";
import SkillContainer from "./SkillContainer";
import Slider from "./Slider";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiNodedotjs,
  SiMysql,
  SiExpress,
} from "react-icons/si";

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
            I'm <span className='text-orange-600'>Zach</span> a self-taught
            developer with a passion for coding and a desire to work alongside a
            team of experienced developers to continue learning and improving my
            skills. I have a strong foundation in various programming languages
            ​​including JavaScript, HTML, CSS and Python as well as experience
            with various web development frameworks such as React, Node.js and
            Express. In my projects I have demonstrated my ability to work with
            the front-end and back-end aspects of web development.
          </p>
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center'>
          <h2 className='text-5xl text-secondary h-auto font-bold place-self-center'>
            Skills
          </h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8'>
            <SkillContainer text={"React"}>
              <SiReact />
            </SkillContainer>
            <SkillContainer text={"JavaScript(ES6)"}>
              <SiJavascript />
            </SkillContainer>
            <SkillContainer text={"Html5"}>
              <SiHtml5 />
            </SkillContainer>
            <SkillContainer text={"CSS3"}>
              <SiCss3 />
            </SkillContainer>
            <SkillContainer text={"TailwindCSS"}>
              <SiTailwindcss />
            </SkillContainer>
            <SkillContainer text={"MySQL"}>
              <SiMysql />
            </SkillContainer>
            <SkillContainer text={"Node.js"}>
              <SiNodedotjs />
            </SkillContainer>
            <SkillContainer text={"Express.js"}>
              <SiExpress />
            </SkillContainer>
            <SkillContainer text={"Firebase"}>
              <SiFirebase />
            </SkillContainer>
            <SkillContainer text={"GitHub"}>
              <SiGithub />
            </SkillContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
