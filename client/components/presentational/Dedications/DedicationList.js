import React from 'react';
import PropTypes from 'prop-types';

const Dedication = props => {
	return (
		<li>
			<div>`Song: ${props.dedication.song}`</div>
			<div>{props.dedication.content}</div>
		</li> 
	);
};

Dedication.propTypes = {
	dedication: PropTypes.object,
};

const DedicationList = props => {
	return (
		<ul>
			{props.dedications.map(item => <Dedication key={item.id} dedication={item} />)}
		</ul>
	);
};

DedicationList.propTypes = {
	dedications: PropTypes.array,
};

//const DedicationList = props => <h2>Here will be DedicationList</h2>;

export default DedicationList;