import React from 'react';
import PropTypes from 'prop-types';

const UserDedicationList = props => {
	if (!props.userDedications.length) {
		return (
			<div>You do not have any music dedication.</div>
		);
	} else {
		return (
			<ul>
				{props.userDedications.map(item => (
					<li key={item._id}>
						<button className="close" onClick={() => props.deleteDedication(item._id)} aria-label="Close">
  							<span aria-hidden="true">&times;</span>
						</button>
						<div>Song: {item.song}</div>
						<div>Content: {item.content}</div>
						<hr />
					</li>
				))}
			</ul>
		);
	}
};

UserDedicationList.propTypes = {
	userDedications: PropTypes.array,
	deleteDedication: PropTypes.func,
};

export default UserDedicationList;