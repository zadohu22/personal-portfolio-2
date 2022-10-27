import React from 'react';
import { Carousel } from 'flowbite-react';

const Slider = () => {
	return (
		<>
			<div className='h-20 bg-transparent text-black '>
				<Carousel
					className='text-center bg-transparent'
					slideInterval={1000}
					leftControl='_'
					rightControl='_'
					indicators={false}
				>
					<div className='flex text-center justify-center items-center gap-10'>
						<h1>hi</h1>
						<h1>hiiiii</h1>
					</div>

					<h1>hsdfsdfi</h1>
					<h1>hiwerwer</h1>
					<h1>hsdfsdfi</h1>
				</Carousel>
			</div>
		</>
	);
};

export default Slider;
