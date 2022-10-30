import React from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Slider from './components/Slider';

const App = () => {
	return (
		<div className='w-full h-full hellooooo'>
			<Nav />
			<Hero />
			<Slider />
			<About />
		</div>
	);
};

export default App;
