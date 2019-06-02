import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const NavBar = () => {
	return (
		<div className='sticky'>
			<ul className='main-nav'>
				<li><Link to='/rejected/home'>Home</Link></li>
				<li><Link to='/rejected/details'>Rejected</Link></li>
				<li><Link to='/rejected/tips'>Tips</Link></li>
			</ul>
		</div>
	);
}

export default NavBar;
