import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBlog } from '../Components/Blog/useBlog';
import Blog from '../Components/Blog/BlogPost';

const CreatePost = () => {
	// State variables for title and body of the new blog post
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	// React Router hook for navigation
	const navigate = useNavigate();

	// Custom hook for managing blog state
	const { dispatch } = useBlog();

	// Function to handle form submission
	const handleSubmit = async e => {
		e.preventDefault();
		try {
			// Making a POST request to create a new blog post
			const response = await fetch('http://localhost:5000/updates', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }), // Sending title and body in the request body
			});

			// Parsing the response data as JSON
			const data = await response.json();
			console.log(data);

			// Dispatching an action to update the blog state with the new post
			dispatch({ type: 'CREATE_POST', payload: data });

			// Alerting the user that a new post has been created
			alert('New post created');

			// Navigating the user back to the home page after creating the post
			navigate('/');
		} catch (error) {
			// Handling errors if the post creation fails
			console.error('Error creating post:', error);
		}
	};

	return (
		<>
			{/* Rendering the Blog component with form fields and event handlers */}
			<Blog action='create' id={null} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
		</>
	);
};

export default CreatePost;
