import './Home.css';

import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';

import SwiperComponent from '../../Components/Swiper/Swiper';
import Blog from '../../Components/Blog_NotUsed/Blog';

import HomeHero from '../../Assets/homeHero.jpg';

const Home = () => {
	return (
		<>
			<Hero
				cName='hero'
				heroImgSrc={HomeHero}
				heroImgText='boat-on-a-lake-with-mountains-and-forest'
				title='Adventure awaits'
				text='What are you waiting for?'
				btnText='Go to Destinations'
				url='/destinations'
				btnClass='show'
			/>
			<SwiperComponent />
			<About />
			
		</>
	);
};

export default Home;
