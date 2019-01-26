import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Present from '../../Presents/Present';

const UserPresentList = props => {
	if (!props.userPresents.length) {
		return (
			<div>
				<div>You do not have any reserved present.</div>
				<div>To reserve presents, visit <Link to='/presents'>Presents</Link></div>
			</div>
		);
	} else {
		return (
			<ul>
				{props.userPresents.map(item => (
					<li key={item._id}>
						<Present
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