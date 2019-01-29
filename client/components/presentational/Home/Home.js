import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Carousel from './Carousel/Carousel';

const Home = props => {
	return (
		<div>
			<Counter />
			<Carousel />
		</div>
	);
};

export default Home;