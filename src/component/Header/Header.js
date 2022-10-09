import React from 'react';

const Header = () => {
    return (
        <nav>
            <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="/" aria-label="Back to homepage" className="flex items-center p-2">
			<img className="w-10 h-8 dark:text-violet-400" src="https://pluspng.com/img-png/technology-png-png-file-name-technology-transparent-png-1000.png" alt="" />
		</a>
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="/" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/courses" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Courses</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/cart" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Cart</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="/about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">About</a>
			</li>
		</ul>
		<button className="flex justify-end p-4 md:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>
        </nav>
    );
};

export default Header;