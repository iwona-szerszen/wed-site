import React, { Component } from 'react';
import Countdown from 'react-countdown-date';
import styles from './Counter.css';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.weddingDate = new Date(2019, 11, 19, 17, 0, 0);
	}
	render() {
		return (
			
			<div>
				<h1>Time left to wedding</h1>
				<div className={styles.countdown}>
					<Countdown date={this.weddingDate} />
				</div>
			</div>
		);
	}
};

export default Counter;