import React from 'react';
import PropTypes from 'prop-types';
import { IndexLink } from 'react-router';

import { testGuestId } from '../../../../../server/config';

import styles from './Navigation.css';
import bg from '../../../../../assets/images/gold.jpg';

const Navigation = props => {
	return (
		<div style={{ background: `#fff url(${bg}) 0/cover` }} className={styles.navContainer}>
			<nav className={styles.navigation}>
				<div>
					<IndexLink
						to='/' 
						activeClassName={styles.active}
						className={styles.link}
					>
						Home
					</IndexLink>
					<IndexLink
						to='/guests'
						activeClassName={styles.active}
						className={styles.link}
					>
						Guests
					</IndexLink>
					<IndexLink
						to='/presents'
						activeClassName={styles.active}
						className={styles.link} activeClassName={styles.active}
					>
						Presents
					</IndexLink>
					<IndexLink
						to='/dedications'
						activeClassName={styles.active}
						className={styles.link}
					>
						Dedications
					</IndexLink>
				</div>
				<IndexLink
					to={`/guests/${testGuestId}`}
					activeClassName={styles.active}
					className={styles.yourProfile}
				>
					Your profile
				</IndexLink>
			</nav>
		</div>
	);	
};

export default Navigation;

//<IndexLink to={`/posts/${props.post.slug}-${props.post.cuid}`} >
//<IndexLink className='logo' to={`/countries/country/${country.id}`}>
//<IndexLink to='/guests/5c3f3af3c88fdf27d4522134'>Your profile</IndexLink>
//<IndexLink to=`/guests/${id}` params={{ id: testGuestId }}>Your profile</IndexLink>
//<IndexLink to='/guests/5c3f3af3c88fdf27d4522134'>Your profile</IndexLink>
//<IndexLink to={`/guests/${props.userId}`}>Your profile</IndexLink>

/*

		<div className='container'>
			<nav>
				<IndexLink to='/'>Home</IndexLink>
				<IndexLink to='/guests'>Guests</IndexLink>
				<IndexLink to='/presents'>Presents</IndexLink>
				<IndexLink to='/dedications'>Dedications</IndexLink>
				<IndexLink to={`/guests/${testGuestId}`}>Your profile</IndexLink>
			</nav>
			<main>
				{props.children}
			</main>
		</div>

*/