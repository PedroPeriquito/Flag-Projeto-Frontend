import './Destinations.css';

import Hero from '../../Components/Hero/Hero';
import DestinationsHero from '../../Assets/destinationsHero.jpg';
import ProductHeader from '../../Components/ProductHeader/ProductHeader';

const Destinations = () => {
	return (
		<>
			<Hero cName='heroMid' heroImgSrc={DestinationsHero} heroImgText='shallow-focus-photography-of-black-and-silver-compasses-on-top-of-map' title='Destinations' btnClass='hide' />
			<ProductHeader />
		</>
	);
};

export default Destinations;
