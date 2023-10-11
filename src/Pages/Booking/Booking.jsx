import './Booking.css';

import Hero from '../../Components/Hero/Hero';
import BookingHero from '../../Assets/bookingHero.jpg';
import MapsAPI from '../../Components/MapsAPI/MapsAPI';
import Book from '../../Components/Book/Book';

const Booking = () => {
	return (
		<>
			{/* <Hero cName='heroMid' heroImgSrc={BookingHero} heroImgText='person-holding-world-globe-facing-mountain' title='Booking' btnClass='hide' /> */}
			<Book />
		</>
	);
};

export default Booking;
