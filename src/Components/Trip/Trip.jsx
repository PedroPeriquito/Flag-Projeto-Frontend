import './Trip.css';
import TripData from './TripData';

const Trip = () => {
	return (
		<div className='trip'>
			<h1>Our Destinations</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, debitis hic quaerat dolore quia ratione excepturi esse fugiat possimus libero.</p>
			<div className='tripCard'>
				<TripData image={TripData.image} title={TripData.title} text={TripData.text} />
				<TripData image={TripData.image} title={TripData.title} text={TripData.text} />
				<TripData image={TripData.image} title={TripData.title} text={TripData.text} />
				<TripData image={TripData.image} title={TripData.title} text={TripData.text} />
			</div>
		</div>
	);
};

export default Trip;
