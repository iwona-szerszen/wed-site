import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import styles from './InfoList.css';

const InfoItem = props => {
	return (
		<Row className={styles.infoItem}>
			<Col sm={6} className={styles.imageContainer}>
				<img
					src={props.info.image.src}
					alt={props.info.image.alt}
				/>
			</Col>
			<Col sm={6} className={styles.contentContainer}>
				<h4>{props.info.title}</h4>
				<div>{props.info.content}</div>
			</Col>
		</Row>
	);
};

InfoItem.propTypes = {
	info: PropTypes.object,
};

export default InfoItem;