import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';
import { sliderData } from '../Swiper/SliderData';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
	return (
		<div className='swiper'>
			<div className='swiperWrapper'>
				{/* Title for the Swiper component */}
				<h2>Great places to visit</h2>
				{/* Swiper carousel */}
				<Swiper
					modules={[Pagination, EffectCoverflow]} // Including necessary Swiper modules
					slidesPerView={'auto'} // Number of slides to show in the viewport
					spaceBetween={20} // Space between slides
					pagination={{ clickable: true }} // Pagination settings
					loop={true} // Enable infinite loop mode
					effect={'coverflow'} // Choose the coverflow effect for the carousel
					centeredSlides={true} // Center the active slide
					coverflowEffect={{
						rotate: 0, // Degree of rotation for the slides
						stretch: 0, // Depth of the 3D effect
						depth: 200, // Depth of the slides in the stack
						modifier: 1, // Multiplier to control the speed of the effect
						slideShadows: true, // Enable shadows for the slides
					}}
				>
					{/* Mapping through sliderData to create Swiper slides */}
					{sliderData.map((slide, index) => (
						<SwiperSlide key={index}>
							{/* Slide content, in this case, an image */}
							<img src={slide.img} alt={slide.imgText} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default SwiperComponent;
