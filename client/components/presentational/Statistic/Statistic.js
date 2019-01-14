import React from 'react';
import PropTypes from 'prop-types';

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
		<div className="container">
  			<div className="row">
    			<div className="col">
    				<h1>{invitedGuests}</h1>
					<p>Invited</p>
				</div>
    			<div className="col">
    				<h1>{acceptedGuests}</h1>
					<p>Accepted</p>
				</div>
    			<div className="col">
    				<h1>{declinedGuests}</h1>
					<p>Declined</p>
				</div>
    			<div className="col">
    				<h1>{noResponseGuests}</h1>
					<p>No response</p>
				</div>				
		  </div>
		</div>
	);
};

Statistic.propTypes = {
	guests: PropTypes.array,
};

export default Statistic;