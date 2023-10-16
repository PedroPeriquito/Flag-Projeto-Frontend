import './BlogPost.css';
import { useNavigate } from 'react-router-dom';

const Blog = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	// Accessing the navigate function from react-router-dom
	const navigate = useNavigate();

	/* Handles the form submission.*/
	const handleSubmit = async e => {
		e.preventDefault();

		// Check if the action is delete
		if (action === 'delete') {
			// Call the onSubmit function and return
			onSubmit();
			return;
		}

		// Set the initial URL and HTTP method based on the action
		let url = 'http://localhost:5000/updates';
		let method = action === 'update' ? 'PUT' : 'POST';

		// If the action is update, append the post ID to the URL
		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			// Send a request to the server with the appropriate method, headers, and body
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});

			// Check if the response is successful
			if (response.ok) {
				// If successful, navigate to the home page
				navigate('/');
			} else {
				// If not successful, log an error message with the status code
				console.error(`Failed to ${action} post. Status: ${response.status}`);
			}
		} catch (error) {
			// Handle any errors that occur during the fetch operation
			console.error('An error occurred:', error);
		}
	};

	// Render the blog post form
	return (
		<section className='contacts'>
			<div className='contactsWrapper'>
				<form onSubmit={handleSubmit} className='contactsForm'>
					<h3> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>

					<div className='contactsInput'>
						<label>Title</label>
						<input type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>

					<div className='contactsInput'>
						<label>Body</label>
						<textarea value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>

					<div className='contactsInput center'>
						{action === 'delete' ? (
							// If the action is delete, display delete and cancel buttons
							<>
								<button className='formBtns' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='formBtnsCancel' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						) : (
							// If the action is not delete, display submit/update and cancel buttons
							<>
								<button className='formBtns' type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className='formBtnsCancel' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default Blog;
