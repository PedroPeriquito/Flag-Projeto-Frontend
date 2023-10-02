import './Booking.css';

import Hero from '../../Components/Hero/Hero';
import BookingHero from '../../Assets/bookingHero.jpg';
import HotelsAPI from '../../Components/HotelsAPI/HotelsAPI';

const Booking = () => {
	return (
		<>
			<Hero cName='heroMid' heroImgSrc={BookingHero} heroImgText='person-holding-world-globe-facing-mountain' title='Booking' btnClass='hide' />
			<HotelsAPI />
		</>
	);
};

export default Booking;
