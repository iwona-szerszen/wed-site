import React from 'react';
import PropTypes from 'prop-types';
import InfoItem from './InfoItem';
import styles from './InfoList.css';

const InfoList = props => {
	return (
		<div>
			{props.infos.map((item, index) => {
				if (index % 2 == 0) {
					return (
						<div key={index} className={styles.imageOnTheLeft}>
							<InfoItem info={item} />
						</div>
					);
				} else {
					return (
						<div key={index} className={styles.imageOnTheRight}>
							<InfoItem info={item} />
						</div>
					);
				}
			})}
		</div>
	);
};

InfoList.propTypes = {
	infos: PropTypes.array,
};

export default InfoList;