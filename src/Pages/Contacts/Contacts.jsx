import './Contacts.css';
import Hero from '../../Components/Hero/Hero';
import ContactsHero from '../../Assets/contactsHero.jpg';
import ContactForm from '../../Components/ContactForm/ContactForm';

const Contacts = () => {
	return (
		<>
			<Hero cName='heroMid' heroImgSrc={ContactsHero} heroImgText='person-holding-world-globe-facing-mountain' title='Contacts Us' btnClass='hide' />
			<ContactForm />
		</>
	);
};

export default Contacts;
