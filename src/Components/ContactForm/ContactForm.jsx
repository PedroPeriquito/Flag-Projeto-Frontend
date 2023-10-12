import './ContactForm.css';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import useLocalStorage from '../Storage/useLocalStorage';
import useUpateLogger from '../Storage/useUpdateLogger';

const FormSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().email().required(),
	subject: yup.string().required(),
	message: yup.string().required().max(300),
});

const ContactForm = () => {
	const [name, setName] = useLocalStorage('name', '');
	useUpateLogger(name);
	const [email, setEmail] = useLocalStorage('email', '');
	useUpateLogger(email);
	const [subject, setSubject] = useLocalStorage('subject', '');
	useUpateLogger(subject);
	const [message, setMessage] = useLocalStorage('message', '');
	useUpateLogger(message);

	return (
		<div className='formContainer'>
			<h2>Send me a message</h2>
			<Formik
				validationSchema={FormSchema} // Use validationSchema instead of validation
				initialValues={{
					name: name || '',
					email: email || '',
					subject: subject || '',
					message: message || '',
				}}
				onSubmit={values => {
					// Handle form submission here
					console.log(values);
				}}
			>
				{({ errors }) => (
					<Form>
						<div className='form'>
							<label htmlFor='name'>Name:</label>
							<Field name='name' type='text' placeholder='Your name' className='formField' value={name} onChange={e => setName(e.target.value)} />

							{errors.name && <p>{errors.name}</p>}
						</div>

						<div className='form'>
							<label htmlFor='email'>Email:</label>
							<Field name='email' type='email' placeholder='Your email' className='formField' value={email} onChange={e => setEmail(e.target.value)} />
							{errors.email && <p>{errors.email}</p>}
						</div>
						<div className='form'>
							<label htmlFor='subject'>Subject:</label>
							<Field name='subject' type='text' className='formField' placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} />
							{errors.subject && <p>{errors.subject}</p>}
						</div>
						<div className='form'>
							<label htmlFor='message'>Message:</label>
							<Field name='message' as='textarea' rows={4} className='formField' placeholder='Write a message' value={message} onChange={e => setMessage(e.target.value)} />
							{errors.message && <p>{errors.message}</p>}
						</div>
						<button type='submit'>Send Message</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
