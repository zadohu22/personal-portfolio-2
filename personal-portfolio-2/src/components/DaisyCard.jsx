import React from "react";
import { SiGithub, SiGooglechrome } from "react-icons/si";

const DaisyCard = (props) => {
  return (
    <div className='card w-96 h-[30rem] glass'>
      <figure className=' h-[50%]'>
        <img src={props.image} className='object-cover h-full w-full' />
      </figure>
      <div className='card-body'>
        <div className='card-actions justify-start relative bottom-4'>
          <div className='badge badge-outline'>{props.badgeOne}</div>
          <div className='badge badge-outline'>{props.badgeTwo}</div>
        </div>
        <h2 className='card-title'>{props.title}</h2>
        <p>{props.description}</p>
        <div className='card-actions justify-end text-4xl mt-4 gap-8'>
          <a href={props.live}>
            <SiGooglechrome className='project-links' />
          </a>
          <a href={props.repo}>
            <SiGithub className='project-links' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DaisyCard;
