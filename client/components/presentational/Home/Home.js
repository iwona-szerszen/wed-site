import React, { Component } from 'react';
import CountdownContainer from '../../containers/CountdownContainer';
import Carousel from './Carousel/Carousel';

const Home = () => {
	return (
		<div>
			<CountdownContainer weddingDate={new Date(2019, 5, 8, 17, 0, 0)} />
			<Carousel />
		</div>
	);
};

export default Home;