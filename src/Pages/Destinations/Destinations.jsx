import './Destinations.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import DestinationsHero from '../../Assets/destinationsHero.jpg';
import Slider from '../../Components/Slider/Slider';

const Destinations = () => {
	return (
		<>
			
			<Navbar />
			<Hero cName='heroMid' heroImgSrc={DestinationsHero} heroImgText='shallow-focus-photography-of-black-and-silver-compasses-on-top-of-map' title='Destinations' btnClass='hide' />
		</>
	);
};

export default Destinations;
