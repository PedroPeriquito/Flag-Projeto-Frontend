import './BlogPages.css';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumbers = [];

	const totalPages = Math.ceil(totalPosts / postsPerPage);

	// Handle edge cases for first and last pages
	if (totalPages <= 3) {
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}
	} else if (currentPage <= 2) {
		// If current page is near the start
		pageNumbers.push(1, 2, 3, '...', totalPages);
	} else if (currentPage >= totalPages - 1) {
		// If current page is near the end
		pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
	} else {
		// Show current page and two pages before and after
		pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
		pageNumbers.unshift(1, '...');
		pageNumbers.push('...', totalPages);
	}

	return (
		<div className='pagination'>
			<button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
				Prev
			</button>
			{pageNumbers.map((number, idx) =>
				number === '...' ? (
					<span key={`ellipsis-${idx}`}>...</span>
				) : (
					<button key={`page-${number}`} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
						{number}
					</button>
				),
			)}
			<button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
