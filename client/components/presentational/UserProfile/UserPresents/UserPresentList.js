import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const UserPresent = props => {
	return (
		<div>
			<img
				//src={require(`../../../../../assets/images/${props.present.image}`)}
				alt={props.present.image.substring(0, props.present.image.length - 4)}
			/>
			<h4>{props.present.name}</h4>
			<p>{props.present.price} \u20AC</p>
		</div>
	);
};

UserPresent.propTypes = {
	present: PropTypes.object,
};

const UserPresentList = props => {
	if (!props.userPresents.length) {
		return (
			<div>
				<div>You have no present reserved.</div>
				<div>If You want to reserve present, please visit <Link to='/presents'>Presents</Link>.</div>
			</div>
		);
	} else {
		return (
			<ul>
				{props.userPresents.map(item => (
					<li key={item._id}>
						<UserPresent
							key={item._id}
							present={item}
						/>
						<button	className='btn btn-info' onClick={() => props.cancelPresentReservation(item._id)}>Cancel reservation</button>
					</li>
				))}
			</ul>
		);
	}
};

UserPresentList.propTypes = {
	userPresents: PropTypes.array,
	cancelPresentReservation: PropTypes.func,
};

export default UserPresentList;