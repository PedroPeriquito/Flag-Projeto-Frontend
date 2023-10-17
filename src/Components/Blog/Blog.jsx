import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Blog.css';

import Pagination from './BlogPages';

const Home = () => {
	// State variables
	const [posts, setPosts] = useState([]); // Stores the list of posts
	const [error, setError] = useState(null); // Stores any error that occurs during API call

	const [currentPage, setCurrentPage] = useState(1); // Stores the current page number
	const [postsPerPage] = useState(4); // Number of posts to display per page

	// Function to update the current page
	const paginate = pageNumber => setCurrentPage(pageNumber);

	// Fetch posts from the API when the component mounts
	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/updates');

				if (!response.ok) {
					throw new Error('Network response failed :(');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id);
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

	// Get the current posts based on the current page
	const currentPosts = posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	return (
		<section id='blog' className='blog'>
			<div className='container'>
				<div className='blogWrapper'>
					<div className='blogHeader'>
						<h2>Updates</h2>
						<p>All the latest updates</p>
						<p>
							<Link to={`/create`} className='blogBtn post'>
								New Post
							</Link>
						</p>
					</div>

					<div className='blogPosts'>
						{error && <h4>{error.message}</h4>}

						{currentPosts.map(post => (
							<article className='blogPost' key={post.id}>
								<h3>{post.title}</h3>
								<p>{post.body}</p>
								<p className='blogDate'>{post.date}</p>
								<Link to={`/update/${post.id}`} className='blogLink update'>
									<i className='fa-regular fa-pen-to-square'></i>Edit
								</Link>
								<Link to={`/delete/${post.id}`} className='blogLink delete'>
									<i className='fa-solid fa-trash-can'></i>Delete
								</Link>
							</article>
						))}
					</div>

					<Pagination totalPosts={posts.length} postsPerPage={postsPerPage} currentPage={currentPage} paginate={paginate} />
				</div>
			</div>
		</section>
	);
};

export default Home;
