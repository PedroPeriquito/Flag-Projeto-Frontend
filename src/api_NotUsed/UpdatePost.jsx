import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../Components/Blog/useBlog';
import Blog from '../Components/Blog/BlogPost';

const UpdatePost = () => {
	// Extracting the post ID from the URL params using React Router's useParams hook
	const { id: postId } = useParams();
	const id = Number(postId);

	// React Router hook for navigation
	const navigate = useNavigate();

	// Custom hook for managing blog state
	const { dispatch } = useBlog();

	// State variables for the updated post title and body
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	// Fetch the post data when the component is mounted
	useEffect(() => {
		const fetchPost = async () => {
			try {
				// Making a GET request to fetch details of the specific post
				const response = await fetch(`http://localhost:5000/updates/${id}`);
				const post = await response.json();

				// Setting the fetched post title and body to the state
				setTitle(post.title);
				setBody(post.body);
			} catch (error) {
				console.error('Error fetching post:', error);
			}
		};

		fetchPost(); // Call the fetchPost function when the component is mounted
	}, [id]);

	// Function to handle post update
	const handleSubmit = async e => {
		e.preventDefault();

		try {
			// Making a PUT request to update the specific post
			const response = await fetch(`http://localhost:5000/updates/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }), // Sending updated title and body in the request body
			});

			// Parsing the response data as JSON
			const updatedPost = await response.json();

			// Dispatching an action to update the blog state with the updated post
			dispatch({ type: 'UPDATE_POST', payload: updatedPost });

			// Alerting the user that the post has been updated
			alert('Post updated');

			// Navigating the user back to the home page after updating the post
			navigate('/');
		} catch (error) {
			// Handling errors if post update fails
			console.error('Error updating post:', error);
		}
	};

	// Render the Blog component with post details and update functionality
	return <Blog action='update' id={id} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />;
};

export default UpdatePost;
