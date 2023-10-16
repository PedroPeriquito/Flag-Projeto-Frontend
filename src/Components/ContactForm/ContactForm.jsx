import './ContactForm.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

// Validation schema for the form using Yup
const FormSchema = yup.object().shape({
	name: yup.string().required().max(50), // Name validation: required, max length of 50 characters
	email: yup.string().email().required().max(50), // Email validation: required, valid email format, max length of 50 characters
	subject: yup.string().required().max(50), // Subject validation: required, max length of 50 characters
	message: yup.string().required().max(150), // Message validation: required, max length of 150 characters
});

// ContactForm component definition
const ContactForm = () => {
	// Function to handle form submission
	const onSubmit = (values, { resetForm }) => {
		console.log(values); // Log form values to the console

		resetForm(); // Reset the form after submission
		alert('Message sent!'); // Show an alert indicating successful message submission
	};

	// Render the form component
	return (
		<div className='formContainer'>
			<h2>Send me a message</h2>
			{/* Formik form wrapper with validation schema and initial values */}
			<Formik validationSchema={FormSchema} initialValues={{ name: '', email: '', subject: '', message: '' }} onSubmit={onSubmit}>
				<Form>
					{/* Form fields for name, email, subject, and message */}
					<div className='form'>
						<label htmlFor='name'>Name:</label>
						<Field name='name' type='text' placeholder='Your name' className='formField' />
						<ErrorMessage name='name' component='p' /> {/* Display validation error messages */}
					</div>
					<div className='form'>
						<label htmlFor='email'>Email:</label>
						<Field name='email' type='email' placeholder='Your email' className='formField' />
						<ErrorMessage name='email' component='p' /> {/* Display validation error messages */}
					</div>
					<div className='form'>
						<label htmlFor='subject'>Subject:</label>
						<Field name='subject' type='text' className='formField' placeholder='Subject' />
						<ErrorMessage name='subject' component='p' /> {/* Display validation error messages */}
					</div>
					<div className='form'>
						<label htmlFor='message'>Message:</label>
						<Field name='message' as='textarea' rows={4} className='formField' placeholder='Write a message' />
						<ErrorMessage name='message' component='p' /> {/* Display validation error messages */}
					</div>
					<button type='submit'>Send Message</button> {/* Submit button */}
				</Form>
			</Formik>
		</div>
	);
};

export default ContactForm;
