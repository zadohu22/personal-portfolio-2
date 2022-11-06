import React from "react";
import ProjectCard from "./ProjectCard";
import cookbook from "../media/cookbook.png";
import DaisyCard from "./DaisyCard";

const Projects = () => {
  return (
    <div className='w-full p-8 flex flex-col justify-center items-center gap-8'>
      <h1 className='text-5xl underline'>Projects</h1>

      <DaisyCard
        image={cookbook}
        title='Cookbook'
        description='this is the description this is the description this is the description'
        badgeOne={"React"}
        badgeTwo={"Tailwind"}
      />
      {/* <ProjectCard
        image={cookbook}
        title='Cookbook'
        description='this is the description this is the description this is the description'
        badgeOne={"React"}
        badgeTwo={"Tailwind"}
      /> */}

      {/* <ProjectCard
        image={cookbook}
        title='Cookbook App'
        description='this is the description this is the description this is the description this is the description '
        badgeOne='React'
        badgeTwo='TailwindCSS'
      /> */}
    </div>
  );
};

export default Projects;
