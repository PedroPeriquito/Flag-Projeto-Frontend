import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Blog.css';

import Pagination from './BlogPages';

const Home = () => {
	const [posts, setPosts] = useState([]);
	const [error, setError] = useState(null);

	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const response = await fetch('http://localhost:5000/updates');

				if (!response.ok) {
					throw new Error('Network response foi nos piriquitos :(');
				}

				const data = await response.json();
				const sortedData = data.sort((a, b) => b.id - a.id); // Ordena os posts por ID de maneira decrescente
				setPosts(sortedData);
			} catch (error) {
				setError(error);
			}
		};

		fetchPosts();
	}, []);

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
								<p className='blogDate'>{new Date(post.date).toLocaleDateString('en-GB')}</p>
								<Link to={`/update/${post.id}`} className='blogLink update'>
									<i class='fa-regular fa-pen-to-square'></i>Update
								</Link>
								<Link to={`/delete/${post.id}`} className='blogLink delete'>
									<i class='fa-solid fa-trash-can'></i>Delete
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
