import React from 'react';
import cookbook from '../media/cookbook.png';
import storePage from '../media/storepage.png';
import huddle from '../media/huddle.png';
import pokemon from '../media/pokemon.png';
import weather from '../media/weather.png';
import flashcards from '../media/flashcards.png';
import DaisyCard from './DaisyCard';

const Projects = () => {
	return (
		<div
			className='w-full p-8 flex flex-col justify-center items-center gap-8 projects-container relative'
			id='sectionThree'
		>
			<div class='custom-shape-divider-top-1668563140'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'
				>
					<path
						d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
						class='shape-fill'
					></path>
				</svg>
			</div>
			<h1 className='text-5xl mt-24  mb-12 relative bottom-4 text-accent font-bold'>
				Projects
			</h1>

			<div className='w-full mt-12 grid justify-items-center items-center grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-[5em]'>
				<DaisyCard
					image={flashcards}
					title='Flashcards App'
					description='Full CRUD flashcard app with encrypted user authentication. Using React, Node, Express, MySQL, JWT. Deployed with Railway.'
					badgeOne='Node'
					badgeTwo='MySQL'
					live='https://flashcard-app-client.vercel.app/'
					repo='https://github.com/zadohu22/Flashcards-App'
				/>

				<DaisyCard
					image={cookbook}
					title='Cookbook App'
					description='Full CRUD app using React, Tailwind, FirebaseDB and Spoonacular API.'
					badgeOne='React'
					badgeTwo='Firebase'
					live='https://cookbook-3b981.web.app/'
					repo='https://github.com/zadohu22/cookbook'
				/>
				<DaisyCard
					image={huddle}
					title='Huddle Landing Page'
					description='Fully responsive landing page. Challenge from frontendmentor.io'
					badgeOne='React'
					badgeTwo='Tailwind'
					live='https://zadohu22.github.io/Huddle-landing-page-FEM/'
					repo='https://github.com/zadohu22/Huddle-landing-page-FEM'
				/>
				<DaisyCard
					image={storePage}
					title='Shopping Cart'
					description='Responsive product page with shopping cart, using React hooks.'
					badgeOne='React'
					badgeTwo='Tailwind'
					live='https://zadohu22.github.io/store-page-deploy/'
					repo='https://github.com/zadohu22/store-page/tree/main/store-page'
				/>
				<DaisyCard
					image={pokemon}
					title='Memory Game'
					description='Simple memory game using React hooks to keep track of score. '
					badgeOne='React'
					badgeTwo='API'
					live='https://zadohu22.github.io/memory-card-deploy/'
					repo='https://github.com/zadohu22/memory-card/tree/main/memory-card'
				/>
				<DaisyCard
					image={weather}
					title='Current Weather'
					description='Displays the current weather for a given city. Practices displaying API information.'
					badgeOne='VanillaJS'
					badgeTwo='Webpack'
					live='https://weather-71nf1ltls-zadohu22.vercel.app/'
					repo='https://github.com/zadohu22/weatherApp'
				/>
			</div>
		</div>
	);
};

export default Projects;
