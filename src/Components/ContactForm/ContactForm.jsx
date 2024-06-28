import './ContactForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

// Validation schema for the form using Yup
const FormSchema = yup.object().shape({
	name: yup.string().required().max(50),
	email: yup.string().email().required().max(50), 
	subject: yup.string().required().max(50), 
	message: yup.string().required().max(150), 
});

// ContactForm component definition
const ContactForm = () => {
	
	const onSubmit = (values, { resetForm }) => {
		console.log(values);

		resetForm(); 
		alert('Message sent!'); 
	};


	return (
		<div className='formContainer'>
			<h2>Send me a message</h2>
			
			<Formik validationSchema={FormSchema} initialValues={{ name: '', email: '', subject: '', message: '' }} onSubmit={onSubmit}>
				<Form>
				
					<div className='form'>
						<label htmlFor='name'>Name:</label>
						<Field name='name' type='text' placeholder='Your name' className='formField' />
						<ErrorMessage name='name' component='p' /> 
					</div>
					<div className='form'>
						<label htmlFor='email'>Email:</label>
						<Field name='email' type='email' placeholder='Your email' className='formField' />
						<ErrorMessage name='email' component='p' />
					</div>
					<div className='form'>
						<label htmlFor='subject'>Subject:</label>
						<Field name='subject' type='text' className='formField' placeholder='Subject' />
						<ErrorMessage name='subject' component='p' /> 
					</div>
					<div className='form'>
						<label htmlFor='message'>Message:</label>
						<Field name='message' as='textarea' rows={4} className='formField' placeholder='Write a message' />
						<ErrorMessage name='message' component='p' /> 
					</div>
					<button type='submit'>Send Message</button> 
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
