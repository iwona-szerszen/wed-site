import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../GuestsPage.css';

const Statistic = props => {
	let invitedGuests = 0;
	let noResponseGuests = 0;
	let acceptedGuests = 0;
	let declinedGuests;

	props.guests.forEach(guest => {
		invitedGuests += guest.totalMembers;
		if (!guest.responded) {
			noResponseGuests += guest.totalMembers;
		} else {
			if (guest.attended) {
				acceptedGuests += guest.totalMembers;
			}
		}
	});

	declinedGuests = invitedGuests - noResponseGuests - acceptedGuests;

	return (
		<Container className={styles.statistic}>
			<Row className='flex-column'>
				<Col>
					<div className={styles.figures}>
						<h2>{invitedGuests}</h2>
						<p>Invited</p>
					</div>
				</Col>
				<Col>
					<div className={styles.figures}>
    					<h2>{acceptedGuests}</h2>
						<p>Accepted</p>
					</div>
				</Col>
				<Col>
					<div className={styles.figures}>
    					<h2>{declinedGuests}</h2>
						<p>Declined</p>
					</div>
				</Col>
				<Col>
					<div className={styles.figures}>
    					<h2>{noResponseGuests}</h2>
						<p>No<br /> response</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

Statistic.propTypes = {
	guests: PropTypes.array,
};

export default Statistic;