import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='w-full p-8 flex flex-col justify-center items-center gap-8'>
        <h1 className='text-5xl underline'>Projects</h1>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default Projects