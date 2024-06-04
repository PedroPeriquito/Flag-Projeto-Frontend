import './BlogPost.css';
import { useNavigate } from 'react-router-dom';

const Blog = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	const formatDate = date => {
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-based
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const currentDate = formatDate(new Date());

		if (action === 'delete') {
			onSubmit();
			return;
		}

		let url = 'http://localhost:5000/updates';
		let method = action === 'update' ? 'PUT' : 'POST';

		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body, date: currentDate }),
			});

			if (response.ok) {
				navigate('/');
			} else {
				console.error(`Failed to ${action} post. Status: ${response.status}`);
			}
		} catch (error) {
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
