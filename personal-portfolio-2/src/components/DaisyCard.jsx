import React from "react";
import { SiGithub, SiGooglechrome } from "react-icons/si";

const DaisyCard = (props) => {
  return (
    <div className='card max-w-[22em] lg:max-w-[25em] h-[30rem] glass'>
      {/* <figure className='h-[50%]'> */}
      <a href={props.live} className='w-full h-[50%]' target='_blank'>
        <img src={props.image} className='h-full object-cover h-full w-full' />
      </a>
      {/* </figure> */}
      <div className='card-body relative'>
        <h2 className='card-title absolute top-2 self-center text-2xl md:text-3xl underline'>
          {props.title}
        </h2>

        <p className='absolute top-16 pr-4 font-bold text-center'>
          {props.description}
        </p>

        <div className='card-actions justify-start absolute bottom-6 left-6 flex flex-col md:flex-row'>
          <div className='badge badge-outline'>{props.badgeOne}</div>
          <div className='badge badge-outline'>{props.badgeTwo}</div>
        </div>

        <div className='card-actions justify-end text-4xl mt-4 gap-8 absolute bottom-4 right-4'>
          <a href={props.live} target='_blank'>
            <SiGooglechrome className='project-links' />
          </a>
          <a href={props.repo} target='_blank'>
            <SiGithub className='project-links' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DaisyCard;
