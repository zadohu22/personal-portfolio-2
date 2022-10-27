import React from 'react';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Slider from './components/Slider';

const App = () => {
	return (
		<div className='w-full h-full hellooooo'>
			<Nav />
			<Hero />
			<div className='bg-transparent bg-opacity-60 h-[10em] w-full'>
				test test
			</div>
			<div className='bg-transparent bg-opacity-60'>test test</div>
			<div className='bg-transparent bg-opacity-60'>test test</div>
			<div className='bg-transparent bg-opacity-60'>test test</div>
			<Slider />
		</div>
	);
};

export default App;
