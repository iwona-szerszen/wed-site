import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountdownContainer from '../../containers/CountdownContainer';
import InfoList from './InfoList/InfoList';
import santoriniImg from '../../../../assets/images/santorini.jpg';
import churchImg from '../../../../assets/images/church.jpg';
import receptionImg from '../../../../assets/images/reception.jpg';
import styles from './Home.css';

const infos = [
	{
		image: {
			src: santoriniImg,
			alt: 'santorini',
		},
		title: 'Wedding on Santorini',
		content: 'Our wedding will be taking place on February 29, 2020 on beautiful Santorini island. We fell in love with Santorini\'s culture, people, beaches and caldera during our travels and couldn\'t think of a better place to celebrate this special occasion.',
	},
	{
		image: {
			src: churchImg,
			alt: 'church',
		},
		title: 'Ceremony',
		content: 'The Catholic wedding ceremony is held in Saint John the Baptist\'s Cathedral in Fira at 5 p.m. The church is located near the main square, in a fantastic spot with an extraordinary view to Aegean Sea.',
	},
	{
		image: {
			src: receptionImg,
			alt: 'reception',
		},
		title: 'Reception',
		content: 'After ceremony we all go to Dana Villas in Firostefani (5 minutes drive from the church - shuttles will be available to transport guests) to celebrate our union with delicious food and, of course, plenty of wine ;-)',
	},
];

const Home = () => {
	return (
		<div>
			<div className={styles.hero}></div>
			<Container fluid>
				<div className={styles.container}>
					<Row className={styles.welcomeContainer}>
						<Col className={styles.data} md='auto'>
							<div className={styles.names}>Amanda &amp; David</div>
							<div>Celebrate with us on February 29, 2020</div>
						</Col>
						<Col className={styles.countdown} md='auto'>
							<CountdownContainer weddingDate={new Date(2020, 1, 29, 17, 0, 0)} />
						</Col>
					</Row>
					<div>
						<section className={styles.introduction}>
							<p>Welcome to our wedding website! Thank you so much for visiting! This is the place you'll find a piece of information you will need regarding our wedding celebration :-)</p>
						</section>
						<InfoList infos={infos} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;