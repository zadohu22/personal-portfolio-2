import React from "react";
import ProjectCard from "./ProjectCard";
import cookbook from "../media/cookbook.png";
import storePage from "../media/storepage.png";
import huddle from "../media/huddle.png";
import pokemon from "../media/pokemon.png";
import weather from "../media/weather.png";
import calc from "../media/calc.png";
import DaisyCard from "./DaisyCard";

const Projects = () => {
  return (
    <div className='w-full p-8 flex flex-col justify-center items-center gap-8'>
      <h1 className='text-5xl underline'>Projects</h1>

      <div className='w-full grid justify-items-center items-center grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[5em]'>
        <DaisyCard
          image={cookbook}
          title='Cookbook App'
          description='this is the description this is the description this is the description'
          badgeOne='React'
          badgeTwo='Firebase'
          live='https://cookbook-3b981.web.app/'
          repo='https://github.com/zadohu22/cookbook'
        />
        <DaisyCard
          image={huddle}
          title='Huddle Landing Page'
          description='this is the description this is the description this is the description'
          badgeOne='React'
          badgeTwo='Tailwind'
          live='https://zadohu22.github.io/Huddle-landing-page-FEM/'
          repo='https://github.com/zadohu22/Huddle-landing-page-FEM'
        />
        <DaisyCard
          image={storePage}
          title='Shopping Cart'
          description='this is the description this is the description this is the description'
          badgeOne='React'
          badgeTwo='Tailwind'
          live='https://zadohu22.github.io/store-page-deploy/'
          repo='https://github.com/zadohu22/store-page/tree/main/store-page'
        />
        <DaisyCard
          image={pokemon}
          title='Memory Game'
          description='this is the description this is the description this is the description'
          badgeOne='React'
          badgeTwo='API'
          live='https://zadohu22.github.io/memory-card-deploy/'
          repo='https://github.com/zadohu22/memory-card/tree/main/memory-card'
        />
        <DaisyCard
          image={weather}
          title='Current Weather'
          description='this is the description this is the description this is the description'
          badgeOne='VanillaJS'
          badgeTwo='Webpack'
          live='https://weather-71nf1ltls-zadohu22.vercel.app/'
          repo='https://github.com/zadohu22/weatherApp'
        />
        <DaisyCard
          image={calc}
          title='Calculator'
          description='this is the description this is the description this is the description'
          badgeOne='VanillaJS'
          badgeTwo='Vanilla CSS'
          live='https://zadohu22.github.io/ProjectFour_TOP_Calculator/'
          repo='https://github.com/zadohu22/ProjectFour_TOP_Calculator'
        />
      </div>
    </div>
  );
};

export default Projects;
