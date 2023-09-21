import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Trip from '../../Components/Trip/Trip';
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
			<About />
			<Trip/>
		</>
	);
};

export default Home;
