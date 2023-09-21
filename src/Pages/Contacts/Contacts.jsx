import './Contacts.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import HomeHero from '../../Assets/homeHero.jpg';

const Contacts = () => {
	return (
		<>
			<Navbar />
			<Hero cName='heroMid' heroImgSrc={HomeHero} heroImgText='person-holding-world-globe-facing-mountain' title='Adventure awaits' btnClass='hide' />
		</>
	);
};

export default Contacts;
