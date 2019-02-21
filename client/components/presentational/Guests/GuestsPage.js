import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Statistic from './Statistic/Statistic';
import GuestList from './GuestList/GuestList';
import styles from './GuestsPage.css';


const GuestsPage = props => {
	return (
		<Container fluid className={styles.containerFluid}>
			<Row className={styles.container}>
				<Col sm={12} md={10}>
					<Row>
						<Col className={styles.introduction}>
							<p>We are so excited for the wedding in Santorini on May 8! It will be great to celebrate with everyone who can make the trip, but if you cannot travel to Santorini within this period, we hope you will celebrate with us upon our return.</p>
							<p><strong>Please inform us about your presence at the the wedding by March 31, 2019</strong> (click R.S.V.P. button below).</p>
						</Col>
					</Row>
					<Row>
						<Col className={styles.buttonContainer}>
							<button	
								className={styles.RSVPbutton} 
								onClick={props.moveToConfirmPresence}>
									R.S.V.P.
									<span className={styles.arrow}>❯</span>
							</button>
						</Col>	
					</Row>
					<Row>
						<Col className={styles.guestListContainer}>
							<GuestList guests={props.guests} />
						</Col>
					</Row>
				</Col>
				<Col sm={12} md='auto' className={styles.statisticContainer}>
					<Statistic guests={props.guests} />
				</Col>
			</Row>
  		</Container>
	);
};

GuestsPage.propTypes = {
	guests: PropTypes.array,
	moveToConfirmPresence: PropTypes.func,
};

export default GuestsPage;