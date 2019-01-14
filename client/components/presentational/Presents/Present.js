import React from 'react';
import PropTypes from 'prop-types';
//import bootstrap from 'bootstrap';

const Present = props => {
	if (!props.present.reserved) {
		return (
			<li>
				<img src={props.present.imageUrl} />
				<h4>{props.present.name}</h4>
				<p>{props.present.price} \u20AC</p>
				<button className='btn btn-primary' onClick={props.reservePresent}>Reserve present</button>
			</li>
		);
	} else {
		return (
			<li>
				<img src={props.present.imageUrl} />
				<h4>{props.present.name}</h4>
				<p>{props.present.price} \u20AC</p>
				<button className='btn btn-secondary' disabled>Reserved</button>
			</li>
		);
	}
};

Present.propTypes = {
	present: PropTypes.object,
	reservePresent: PropTypes.func,
};

export default Present;

//<button onClick={() => addNote({task: 'New Note'}, laneId)}>Add Note</button>
//<button onClick={props.deleteCountry.bind(null, country.id)}>Delete</button>