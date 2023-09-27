import './ContactForm.css';

const ContactForm = () => {
	return (
		<div className='formContainer'>
			<h2>Send me a message</h2>
			<form action=''>
				<input placeholder='Name' type='text' />
				<input placeholder='Email' type='email' />
				<input placeholder='Subject' type='text' />
				<textarea placeholder='Message' rows={4}></textarea>
				<button>Send Message</button>
			</form>
		</div>
	);
};

export default ContactForm;
