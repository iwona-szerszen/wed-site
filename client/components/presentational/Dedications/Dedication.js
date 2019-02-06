import React from 'react';
import PropTypes from 'prop-types';

const Dedication = props => {
	return (
		<li>
			<div>{props.dedication.song}</div>
			<div>{props.dedication.content}</div>
			<div>{props.dedication.from.names}</div>
			<hr />
		</li> 
	);
};

Dedication.propTypes = {
	dedication: PropTypes.object,
};

export default Dedication;