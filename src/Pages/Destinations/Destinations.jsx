import './Destinations.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import DestinationsHero from '../../Assets/destinationsHero.jpg';

const Destinations = () => {
	return (
		<>
			<Navbar />
			<Hero cName='heroMid' heroImgSrc={DestinationsHero} heroImgText='person-wearing-beige-sweater-holding-map-inside-vehicle' title='Destinations' btnClass='hide' />
		</>
	);
};

export default Destinations;
