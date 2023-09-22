import './Trip.css';
import { TripData } from './TripData';
import { Link } from 'react-router-dom';

const Trip = () => {
	return (
		<div className='trip'>
			<h1>Our Destinations</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, debitis hic quaerat dolore quia ratione excepturi esse fugiat possimus libero.
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, placeat?
			</p>
			<Link to='/destinations' className='tripContainer'>
				{TripData.map((item, index) => {
					return (
						<div className='tripCard' key={index}>
							<div className='tripImage'>
								<img src={item.img} alt={item.imgText} />
							</div>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</div>
					);
				})}
			</Link>
		</div>
	);
};

export default Trip;
