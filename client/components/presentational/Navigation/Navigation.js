import React from 'react';
import { Link } from 'react-router';

// Import Style
//import styles from './Navigation.css';

const Navigation = props => {
	return (
		<div>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/guests'>Guests</Link>
				<Link to='/presents'>Presents</Link>
				<Link to='/dedications'>Dedications</Link>
			</nav>
			<main>
				{props.children}
			</main>
		</div>
	);	
};

export default Navigation;