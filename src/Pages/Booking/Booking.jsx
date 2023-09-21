import './Booking.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import HomeHero from '../../Assets/homeHero.jpg';

const Booking = () => {
	return (
		<>
			<Navbar />
			<Hero cName='heroMid' heroImgSrc={HomeHero} heroImgText='person-holding-world-globe-facing-mountain' title='Booking' btnClass='hide' />
		</>
	);
};

export default Booking;
