import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';
import forest from '../../Assets/forestTrip.jpg';
import desert from '../../Assets/desertTrip.jpg';
import canyon from '../../Assets/canyonTrip.jpg';
import snow from '../../Assets/snowTrip.jpg';
import { sliderData } from '../Slider/SliderData';

const SwiperComponent = () => {
	return (
		<div className='swiper'>
			<Swiper spaceBetween={50} slidesPerView={2} onSlideChange={() => console.log('slide change')} onSwiper={swiper => console.log(swiper)}>
				{sliderData.map((slide, index) => (
					<SwiperSlide key={index}>
						<img src={slide.img} alt={slide.imgText} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default SwiperComponent;
