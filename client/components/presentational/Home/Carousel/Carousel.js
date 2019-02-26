import React from 'react';
import { Carousel as RBCarousel } from 'react-bootstrap';
import coupleImg from '../../../../../assets/images/couple.jpg';
import santoriniImg from '../../../../../assets/images/santorini.jpg';
import churchImg from '../../../../../assets/images/church.jpg';
import receptionImg from '../../../../../assets/images/reception.jpg';
import styles from './Carousel.css'

const Carousel = () => {
	return (
		<RBCarousel interval={8000} fade='true'>
			<RBCarousel.Item className={styles.carouselItem}>
				<img
			    	className={styles.carouselImage}
			    	src={coupleImg}
			    	alt='couple'
			    />
			    <RBCarousel.Caption>
			    	<p>Welcome to our wedding website! Thank you so much for visiting!<br/>This is the place you'll find a piece of information you will need regarding our wedding celebration :)</p>
			    </RBCarousel.Caption>
			</RBCarousel.Item>
			<RBCarousel.Item className={styles.carouselItem}>
			    <img
			    	className={styles.carouselImage}
			    	src={santoriniImg}
			    	alt='santorini'
			    />
			    <RBCarousel.Caption>
			    	<h3>Wedding on Santorini</h3>
			    	<p>Our wedding will be taking place on beautiful Santorini. We fell in love with Santorini's culture, people, beaches and caldera during our travels and couldn't think of a better place to celebrate this special occasion. So mark your calendars because we would love for you to come celebrate with us!</p>
			    </RBCarousel.Caption>
			</RBCarousel.Item>
			<RBCarousel.Item className={styles.carouselItem}>
			    <img
			    	className={styles.carouselImage}
			    	src={churchImg}
			    	alt='church'
			    />
			    <RBCarousel.Caption>
			    	<h3>Ceremony</h3>
			    	<p>The Catholic wedding ceremony is held in Saint John the Baptist's Cathedral in Fira at 5 p.m. The church is located near the main square, in a fantastic spot with an extraordinary view to Aegean Sea.</p>
			    </RBCarousel.Caption>
			</RBCarousel.Item>
			<RBCarousel.Item className={styles.carouselItem}>
			    <img
			    	className={styles.carouselImage}
			    	src={receptionImg}
			    	alt='reception'
			    />
			    <RBCarousel.Caption>
			    	<h3>Reception</h3>
			    	<p>After ceremony we all go to Dana Villas in Firostefani (5 minutes drive from the church - shuttles will be available to transport guests) to celebrate our union with delicious food and, of course, plenty of wine ;)</p>
			    </RBCarousel.Caption>
			</RBCarousel.Item>
		</RBCarousel>
	);
};

export default Carousel;

/*

	const carouselContent = [
		{
			title: '',
			description: 'Welcome to our wedding website! Thank you so much for visiting! This is the place you\'ll find a piece of information you will need regarding our wedding celebration :)',
			image: 'couple.jpg',
		},
		{
			title: 'Wedding on Santorini',
			description: 'Our wedding will be taking place on beautiful Santorini. We fell in love with Santorini\'s culture, people, beaches and caldera during our travels and couldn\'t think of a better place to celebrate this special occasion. So mark your calendars because we would love for you to come celebrate with us!',
			image: 'santorini.jpg',
		},
		{
			title: 'Ceremony',
			description: 'The Catholic wedding ceremony is held in Saint John the Baptist\'s Cathedral in Fira at 5 p.m. The church is located near the main square, in a fantastic spot with an extraordinary view to Aegean Sea.',
			image: 'church.jpg',
		},
		{
			title: 'Reception',
			description: 'After ceremony we all go to Dana Villas in Firostefani (5 minutes drive from the church - shuttles will be available to transport guests) to celebrate our union with delicious food and, of course, plenty of wine ;)',
			image: 'reception.jpg',
		},
	];

	return (
		<RBCarousel>
			{carouselContent.map((item, index) => (
				<RBCarousel.Item key={index}>
				    <img
				    	className='d-block w-100'
				    	height={400}
				    	src={require(`../../../../../assets/images/${item.image}`)}
						alt={item.image.substring(0, item.image.length - 4)}
				    />
				    <RBCarousel.Caption>
				    	<h3>{item.title}</h3>
				    	<p>{item.description}</p>
				    </RBCarousel.Caption>
				</RBCarousel.Item>
			))}
		</RBCarousel>
	);
*/