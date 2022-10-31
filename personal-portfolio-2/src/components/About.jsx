import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[60em] md:h-[40em] grid grid-cols-1 md:grid-cols-2 md:mt-24'>

        <div className='w-full h-full flex flex-col justify-center items-center px-6 py-20'>
            <h2 className='text-5xl font-bold underline place-self-center flex-1'>About Me</h2>
            <p className='flex-1 text-center mt-8 relative bottom-8 md:bottom-4 md:mb-[8rem] leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi quis deleniti dolores vel? Deleniti incidunt rerum, ipsam consectetur quam ratione ducimus cupiditate doloremque? Necessitatibus?</p>
        </div>

        <div className='w-full h-full flex flex-col justify-center items-center md:px-6 md:py-20 border-l-2 border-slate-300'>
          <h2 className='text-5xl h-auto font-bold underline place-self-center'>Skills</h2>
          <div className='flex gap-8 text-center flex-1 mt-20'>
            <div>
              <h3 className='underline text-2xl font-bold md:mt-8 '>Experienced</h3>
              <ul className='mt-4 flex flex-col gap-2 font-bold text-xl'>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript(vanilla)</li>
                <li>ReactJS</li>
                <li>Tailwind</li>
                <li>Github</li>
                <li>Firebase</li>

              </ul>
            </div>

            <div>
              <h3 className='underline text-2xl font-bold md:mt-8'>In progress</h3>
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
  )
}

export default About