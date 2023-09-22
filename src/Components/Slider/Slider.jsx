import { useState, useEffect } from 'react';
import './Slider.css';
import { sliderData } from '../Slider/SliderData';

const Slider = () => {
	const [location] = useState(sliderData);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = location.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, location]);

	useEffect(() => {
		const slider = setInterval(() => {
			setIndex(index + 1);
		}, 5000);
		return () => {
			clearInterval(slider);
		};
	}, [index]);

	return (
		<section className='section'>
			<div className='title'>
				<h2 className='sectionTitle'>Destinations</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem placeat quasi aspernatur facilis impedit dolore blanditiis nobis numquam eius debitis.</p>
				<div className='sectionCenter'>
					{location.map((item, indexLocation) => {
						const { id, img, imgText, title, text } = item;
						let position = 'nextSlide';
						if (indexLocation === index) {
							position = 'activeSlide';
						}
						if (indexLocation === index - 1 || (index === 0 && indexLocation === location.length - 1)) {
							position = 'lastSlide';
						}
						return (
							<div className={`article ${position}`} key={id}>
								<img src={img} alt={imgText} className='locationImg' />
								<h4 className='articleTitle'>{title}</h4>
								<p className='text'>{text}</p>
							</div>
						);
					})}
					<button className='prev' onClick={() => setIndex(index - 1)}>
						<i className='fas fa-arrow-left'></i>
					</button>
					<button className='next' onClick={() => setIndex(index + 1)}>
						<i className='fas fa-arrow-right'></i>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Slider;
