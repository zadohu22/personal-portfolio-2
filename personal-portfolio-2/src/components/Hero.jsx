import React from 'react';

const Hero = () => {
	return (
		<div className="hero h-screen ">
			<div className='hero-content text-center'>
				<div className='max-w-md'>
					<h1 className='text-5xl font-bold text-slate-300'>
						Hello, I'm <span className='text-primary'>Zach</span>.
					</h1>
					<p className='py-6 text-slate-300 font-bold'>
						Front-end web developer with a customer service background.
					</p>
					<button className='btn w-64 h-12 shadow-md shadow-slate-300 bg-primary border-primary text-slate-800 hover:bg-slate-500 hover:border-primary hover:text-primary'>
						Projects
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
