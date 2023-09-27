import './Booking.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import BookingHero from '../../Assets/bookingHero.jpg';
import Footer from '../../Components/Footer/Footer';

const Booking = () => {
	return (
		<>
			<Hero cName='heroMid' heroImgSrc={BookingHero} heroImgText='person-holding-world-globe-facing-mountain' title='Booking' btnClass='hide' />
		</>
	);
};

export default Booking;
