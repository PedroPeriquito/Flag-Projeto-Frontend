/* eslint-disable react/prop-types */
import './BlogPost.css';
import { useNavigate } from 'react-router-dom';

const Blog = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		// Ação DELETE
		if (action === 'delete') {
			onSubmit(); // A função handleDelete do componente DeletePost será chamada aqui
			return;
		}

		// Lógica para CREATE e UPDATE
		let url = 'http://localhost:5000/updates';
		let method = action === 'update' ? 'PUT' : 'POST';

		// Se estiver atualizando, adicionamos o ID à URL
		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});

			if (response.ok) {
				navigate('/'); // Navega de volta para o início após a operação
			} else {
				console.error(`Failed to ${action} post. Status: ${response.status}`);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

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
							<>
								<button className='formBtns' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='formBtnsCancel' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						) : (
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
