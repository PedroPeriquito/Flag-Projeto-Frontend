import React from 'react';
import './NotFound.css';
import notFoundImg from '../../Assets/notFound.jpg';

const NotFound = () => {
	return (
		<div className='notFound'>
			<div className='notFoundWrapper'>
				<h2 className='errorHeading'>Error 404</h2>
				<p className='errorMessage'>The page you are looking for could not be found</p>
				<img className='notFoundImage' src={notFoundImg} alt='question-marks-on-brown-surface' />
				<p className='contactMessage'>Contact us and tell us what you are looking for</p>
			</div>
		</div>
	);
};

export default NotFound;
