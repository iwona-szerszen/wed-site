import React from 'react';
import PropTypes from 'prop-types';
import Dedication from './Dedication';

const DedicationList = props => {
	return (
		<ul className='container'>
			{props.dedications.map(item => <Dedication key={item._id} dedication={item} />)}
		</ul>
	);
};

DedicationList.propTypes = {
	dedications: PropTypes.array,
};

export default DedicationList;