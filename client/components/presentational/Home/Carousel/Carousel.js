import React from 'react';

const Carousel = props => {
	return (
		<div id='carousel' className='carousel slide' data-ride='carousel'>
			<ol className='carousel-indicators'>
		  		<li data-target='#carousel' data-slide-to='0' className='active'></li>
		    	<li data-target='#carousel' data-slide-to='1'></li>
		    	<li data-target='#carousel' data-slide-to='2'></li>
			</ol>
			<div className='carousel-inner'>
			    <div className='carousel-item active'>
			    	<img src='...' className='d-block w-100' alt='...' />
			    	<div className='carousel-caption d-none d-md-block'>
    					<h5>h5</h5>
    					<p>Text</p>
  					</div>
			    </div>
			    <div className='carousel-item'>
			    	<img src='...' className='d-block w-100' alt='...' />
			    	<div className='carousel-caption d-none d-md-block'>
    					<h5>h5</h5>
    					<p>Text</p>
  					</div>
			    </div>
			    <div className='carousel-item'>
			    	<img src='...' className='d-block w-100' alt='...' />
			    	<div className='carousel-caption d-none d-md-block'>
    					<h5>h5</h5>
    					<p>Text</p>
  					</div>
			    </div>
			</div>
			<a className='carousel-control-prev' href='#carousel' role='button' data-slide='prev'>
		  		<span className='carousel-control-prev-icon' aria-hidden='true'></span>
		  		<span className='sr-only'>Previous</span>
			</a>
			<a className='carousel-control-next' href='#carousel' role='button' data-slide='next'>
		    	<span className='carousel-control-next-icon' aria-hidden='true'></span>
		    	<span className='sr-only'>Next</span>
			</a>		
		</div>
	);
};

export default Carousel;