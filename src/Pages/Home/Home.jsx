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
			<Navbar />
			<Hero
				cName='hero'
				heroImgSrc={HomeHero}
				heroImgText='boat-on-a-lake-with-mountains-and-forest'
				title='Adventure awaits'
				text='What are you waiting for?'
				btnText='Get Started'
				url='/'
				btnClass='show'
			/>
			<Slider />
			<About />
			<Footer />
		</>
	);
};

export default Home;
