/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useState } from 'react';

const Nav = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);

	const handleClick = () => {
		setMobileNavOpen(!mobileNavOpen);
		console.log('clicked');
	};

	return (
		<>
			<header className='p-4 bg-slate-500 text-slate-300 w-full fixed top-0 z-10'>
				<div className='container flex justify-between h-16 mx-auto'>
					<a
						rel='noopener noreferrer'
						href='#'
						aria-label='Back to homepage'
						className='flex items-center p-2'
					>
						<div className='text-3xl font-bold flex gap-1'>
							<span className='text-primary'>Z</span>
							<span className='text-slate-303'>H</span>
						</div>
					</a>
					<ul className='items-stretch hidden space-x-3 md:flex'>
						<li className='flex'>
							<a
								rel='noopener noreferrer'
								href='#'
								className='flex items-center px-4 -mb-1 border-b-2 border-transparent text-slate-300 hover:text-primary hover:border-primary'
							>
								Home
							</a>
						</li>
						<li className='flex'>
							<a
								rel='noopener noreferrer'
								href='#'
								className='flex items-center px-4 -mb-1 border-b-2 border-transparent text-slate-300 hover:text-primary hover:border-primary'
							>
								About
							</a>
						</li>
						<li className='flex'>
							<a
								rel='noopener noreferrer'
								href='#'
								className='flex items-center px-4 -mb-1 border-b-2 border-transparent text-slate-300 hover:text-primary hover:border-primary'
							>
								Projects
							</a>
						</li>
						<li className='flex'>
							<a
								rel='noopener noreferrer'
								href='#'
								className='flex items-center px-4 -mb-1 border-b-2 border-transparent text-slate-300 hover:text-primary hover:border-primary'
							>
								Contact
							</a>
						</li>
					</ul>
					<button
						onClick={handleClick}
						className='flex justify-end p-4 md:hidden'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							className='w-6 h-6'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M4 6h16M4 12h16M4 18h16'
							></path>
						</svg>
					</button>
				</div>
			</header>

			{mobileNavOpen && (
				<div className=' w-[15em] h-[20em] fixed right-0 top-24 bg-slate-600 opacity-70'>
					<ul className='h-full w-full flex flex-col justify-around text-white'>
						<li className='w-full cursor-pointer text-center'>Home</li>
						<li className='w-full cursor-pointer text-center'>Projects</li>
						<li className='w-full cursor-pointer text-center'>Contact</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Nav;
