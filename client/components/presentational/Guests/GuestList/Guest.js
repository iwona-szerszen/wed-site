import React from 'react';
import PropTypes from 'prop-types';

const Guest = props => {
	return (
		<li>
			<span>{props.guest.names}</span>
			<span> {props.guest.relationship} </span>
			<span>{props.guest.totalMembers}</span>
			<span>status?</span>
			<hr />
		</li>
	);
};

Guest.propTypes = {
	guest: PropTypes.object,
};

export default Guest;