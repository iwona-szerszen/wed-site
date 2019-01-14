import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';

const GuestList = props => {
	return (
		<ul>
			{props.guests.map(item => (
				<Guest key={item.id} guest={item} />
			))}
		</ul>
	);
};

GuestList.propTypes = {
	guests: PropTypes.array,
};

export default GuestList;