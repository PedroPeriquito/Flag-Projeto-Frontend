import './ContactForm.css';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const FormSchema = yup.object().shape({
	Name: yup.string().required(),
	Email: yup.string().email().required(),
	Subject: yup.string().required(),
	Message: yup.string().required().max(300),
});

const ContactForm = () => {
	return (
		<div className='formContainer'>
			<h2>Send me a message</h2>
			<Formik
				validationSchema={FormSchema} // Use validationSchema instead of validation
				initialValues={{
					Name: '',
					Email: '',
					Subject: '',
					Message: '',
				}}
				onSubmit={values => {
					// Handle form submission here
					console.log(values);
				}}
			>
				{({ errors }) => (
					<Form>
						<div className='form'>
							<label htmlFor='Name'>Name:</label>
							<Field name='Name' type='text' className='formField' />
							{errors.Name && <p>{errors.Name}</p>}
						</div>
						<div className='form'>
							<label htmlFor='Email'>Email:</label>
							<Field name='Email' type='email' className='formField' />
							{errors.Email && <p>{errors.Email}</p>}
						</div>
						<div className='form'>
							<label htmlFor='Subject'>Subject:</label>
							<Field name='Subject' type='text' className='formField' />
							{errors.Subject && <p>{errors.Subject}</p>}
						</div>
						<div className='form'>
							<label htmlFor='Message'>Message:</label>
							<Field name='Message' as='textarea' rows={4} className='formField' />
							{errors.Message && <p>{errors.Message}</p>}
						</div>
						<button type='submit'>Send Message</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default ContactForm;
