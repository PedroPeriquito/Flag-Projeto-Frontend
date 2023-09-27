import React from 'react';
import './NotFound.css';
import notFoundImg from '../../Assets/notFound.jpg';

const NotFound = () => {
	return (
		<div className='notFound'>
			<div className='notFoundWrapper'>
				<h2>Error 404</h2>
				<p>The page you are looking for could not be found</p>
				<img src={notFoundImg} alt='question-marks-on-brown-surface' />
			</div>
		</div>
	);
};

export default NotFound;
