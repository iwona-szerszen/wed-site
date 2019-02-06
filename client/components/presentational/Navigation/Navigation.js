import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import { testGuestId } from '../../../../server/config';

import styles from './Navigation.css';

const Navigation = props => {
	return (
		<div className='container'>
			<nav className={styles.navigation}>
				<div className={styles.linkGroup}>
					<Link to='/' className={styles.link}>Home</Link>
					<Link to='/guests' className={styles.link}>Guests</Link>
					<Link to='/presents' className={styles.link}>Presents</Link>
					<Link to='/dedications' className={styles.link}>Dedications</Link>
				</div>
				<Link to={`/guests/${testGuestId}`} className={styles.yourProfile}>Your profile</Link>
			</nav>
			<main>
				{props.children}
			</main>
		</div>
	);	
};

Navigation.propTypes = {
	userId: PropTypes.string,
};

export default Navigation;

//<Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
//<Link className='logo' to={`/countries/country/${country.id}`}>
//<Link to='/guests/5c3f3af3c88fdf27d4522134'>Your profile</Link>
//<Link to=`/guests/${id}` params={{ id: testGuestId }}>Your profile</Link>
//<Link to='/guests/5c3f3af3c88fdf27d4522134'>Your profile</Link>
//<Link to={`/guests/${props.userId}`}>Your profile</Link>

/*

		<div className='container'>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/guests'>Guests</Link>
				<Link to='/presents'>Presents</Link>
				<Link to='/dedications'>Dedications</Link>
				<Link to={`/guests/${testGuestId}`}>Your profile</Link>
			</nav>
			<main>
				{props.children}
			</main>
		</div>

*/