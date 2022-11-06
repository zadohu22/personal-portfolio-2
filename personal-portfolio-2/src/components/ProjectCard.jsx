import React from "react";
import { SiGooglechrome, SiGithub } from "react-icons/si";

const ProjectCard = (props) => {
  return (
    <div className='w-full flex justify-center items-center lg:w-[85%] 2xl:w-[70%] h-[20em] border-2 border-slate-300 rounded-md'>
      <img
        src={props.image}
        alt='cookbook'
        className='w-[40%] self-start h-full object-cover object-top rounded-tr-md rounded bl-md'
      />

      <div className='w-[60%] h-full flex-1 flex flex-col gap-[25%] justify-center items-center relative'>
        <h1 className='text-3xl relative top-6 underline'>{props.title}</h1>
        <p className='flex-1 p-6 h-20'>{props.description}</p>

        <div className='flex flex-1 w-full text-4xl relative bottom-6 '>
          <div className='absolute left-0 flex justify-center items-center gap-4 ml-4'>
            <div className='badge badge-outline relative top-2 w-20 h-6 text-lg'>
              {props.badgeOne}
            </div>
            <div className='badge badge-outline relative top-2 w-auto h-6 text-lg'>
              {props.badgeTwo}
            </div>
          </div>

          <div className='project-links-wrapper flex gap-8'>
            <SiGooglechrome className='project-links' />
            <SiGithub className='project-links' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
