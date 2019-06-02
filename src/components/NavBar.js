import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

const NavBar = () => {
	return (
		<div className='sticky'>
			<ul className='main-nav'>
				<li><Link to='/home'>Home</Link></li>
				<li><Link to='/rejected'>Rejected</Link></li>
				<li><Link to='/tips'>Tips</Link></li>
			</ul>
		</div>
	);
}

export default NavBar;
