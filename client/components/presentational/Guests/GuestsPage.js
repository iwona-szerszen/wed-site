import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Statistic from './Statistic/Statistic';
import GuestList from './GuestList/GuestList';


const GuestsPage = props => {
	return (
		<Container>
			<Row>
				<Col md={9}>
					<Row>
						<Col>
							<button
								className='btn btn-outline-info'
								onClick={props.moveToConfirmPresence}
							>
								R.S.V.P.
							</button>
						</Col>	
					</Row>
					<Row>
						<Col>
							<GuestList guests={props.guests} />
						</Col>
					</Row>
				</Col>
				<Col md={3}>
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