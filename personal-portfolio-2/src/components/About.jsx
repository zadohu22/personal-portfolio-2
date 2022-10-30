import React from 'react'

const About = () => {
  return (
    <div className='w-full h-[40em] grid grid-cols-1 md:grid-cols-2'>

        <div className='w-full h-full flex flex-col justify-center items-center px-6 py-20'>
            <h2 className='text-5xl font-bold underline place-self-center flex-1'>About Me</h2>
            <p className='flex-1 mb-[8em] place-self-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi quis deleniti dolores vel? Deleniti incidunt rerum, ipsam consectetur quam ratione ducimus cupiditate doloremque? Necessitatibus?</p>
        </div>
        <div className='w-full h-full flex flex-col justify-center items-center px-6 py-20 border-2 border-pink-500'>
        <h2 className='text-5xl font-bold underline place-self-center flex-1'>Skills</h2>

        <h1 className='text-pink-300 text-[24px] bg-white font-bold'>hello world</h1>
        

        </div>

    </div>
  )
}

export default About