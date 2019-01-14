import React from 'react';
import PropTypes from 'prop-types';
import Present from './Present';

const PresentList = props => {
	return (
		<ul>
			{props.presents.map(item => (
				<Present
					key={item.id}
					present={item}
					reservePresent={() => props.handleReservePresent(item.id, item)}
				/>
			))}
		</ul>
	);
};

PresentList.propTypes = {
	presents: PropTypes.array,
	handleReservePresent: PropTypes.func,
};

export default PresentList;