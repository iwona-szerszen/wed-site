import React from 'react';
import PropTypes from 'prop-types';

const Present = props => {
	return (
		<div>
			<img src={props.present.image} />
			<h4>{props.present.name}</h4>
			<p>{props.present.price} \u20AC</p>
		</div>
	);
};

Present.propTypes = {
	present: PropTypes.object,
};

export default Present;