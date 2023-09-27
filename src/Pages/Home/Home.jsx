import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
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
			<Slider />
			<About />
		</>
	);
};

export default Home;
