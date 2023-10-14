import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.css';
import { sliderData } from '../Slider/SliderData';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
	return (
		<div className='swiper'>
			<h2>Great places to visit</h2>
			<Swiper
				modules={[Pagination, EffectCoverflow]}
				slidesPerView={'auto'}
				spaceBetween={20}
				pagination={{ clickable: true }}
				loop={true}
				effect={'coverflow'}
				centeredSlides={true}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 200,
					modifier: 1,
					slideShadows: true,
				}}
			>
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
