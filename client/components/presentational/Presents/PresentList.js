import React from 'react';
import PropTypes from 'prop-types';
import Present from './Present';

const PresentList = props => {
	return (
		<ul className='container'>
			{props.presents.map(item => {
				if (!item.reserved) {
					return (
						<li key={item._id}>
							<Present
								key={item._id}
								present={item}
							/>
							<button	className='btn btn-primary' onClick={() => props.handleReservePresent(item._id)}>Reserve present</button>
						</li>
					);
				} else {
					return (
						<li key={item._id}>
							<Present
								key={item._id}
								present={item}
							/>
							<button	className='btn btn-secondary' disabled>Reserved</button>
						</li>
					);
				}
			})}
		</ul>
	);
};

PresentList.propTypes = {
	presents: PropTypes.array,
	handleReservePresent: PropTypes.func,
};

export default PresentList;