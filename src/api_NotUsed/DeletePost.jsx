import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../Components/Blog/useBlog';
import Blog from '../Components/Blog/BlogPost';

const DeletePost = () => {
	// Extracting the post ID from the URL params using React Router's useParams hook
	const { id: postId } = useParams();
	const id = Number(postId);

	// React Router hook for navigation
	const navigate = useNavigate();

	// Custom hook for managing blog state
	const { dispatch } = useBlog();

	// State variable to store the fetched post data
	const [post, setPost] = useState(null);

	// Fetch the post data when the component is mounted
	useEffect(() => {
		const fetchPost = async () => {
			try {
				// Making a GET request to fetch details of the specific post
				const response = await fetch(`http://localhost:5000/updates/${id}`);
				const postData = await response.json();

				// Setting the fetched post data to the state
				setPost(postData);
			} catch (error) {
				console.error('Error fetching post details:', error);
			}
		};

		fetchPost(); // Call the fetchPost function when the component is mounted
	}, [id]);

	// Function to handle post deletion
	const handleDelete = async () => {
		try {
			// Making a DELETE request to delete the specific post
			await fetch(`http://localhost:5000/updates/${id}`, {
				method: 'DELETE',
			});

			// Dispatching an action to update the blog state by removing the deleted post
			dispatch({ type: 'DELETE_POST', payload: id });

			// Alerting the user that the post has been deleted
			alert('Post deleted');

			// Navigating the user back to the home page after deleting the post
			navigate('/');
		} catch (error) {
			// Handling errors if post deletion fails
			console.error('Error deleting post:', error);
		}
	};

	// If post data is not yet fetched, show a loading message
	if (!post) return <div>Loading...</div>;

	// Render the Blog component with post details and delete functionality
	return <Blog action='delete' id={id} title={post.title} body={post.body} onTitleChange={() => {}} onBodyChange={() => {}} onSubmit={handleDelete} />;
};

export default DeletePost;
