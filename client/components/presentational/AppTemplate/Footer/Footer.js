import React from 'react';
import styles from './Footer.css';
import bg from '../../../../../assets/images/gold.jpg';

const Footer = () => {
	return (
		<footer style={{ background: `#fff url(${bg}) 0/cover` }} className={styles.footer}>
			Copyright &copy; 2019 &#124; <a href='https://github.com/iwona-szerszen' target='_blank'>Iwona Szerszen</a>
    	</footer>
	);
};

export default Footer;