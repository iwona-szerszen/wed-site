import React from 'react';
import PropTypes from 'prop-types';
import styles from './Present.css';

const Present = props => {
	return (
		<div>
			<img
				src={require(`../../../../assets/images/${props.present.image}`)}
				alt={props.present.image.substring(0, props.present.image.length - 4)}
			/>
			<h4>{props.present.name}</h4>
			<p>{props.present.price} \u20AC</p>
		</div>
	);
};

Present.propTypes = {
	present: PropTypes.object,
};

export default Present;