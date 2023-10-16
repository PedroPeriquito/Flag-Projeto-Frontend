import './BlogPages.css';
import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	// Array to store page numbers and ellipses for pagination
	const pageNumbers = [];

	// Calculate total number of pages based on total posts and posts per page
	const totalPages = Math.ceil(totalPosts / postsPerPage);

	// Handle edge cases for first and last pages
	if (totalPages <= 3) {
		// If total pages are 3 or less, show all page numbers
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(i);
		}
	} else if (currentPage <= 2) {
		// If current page is near the start, show first 3 pages and ellipsis for the last page
		pageNumbers.push(1, 2, 3, '...', totalPages);
	} else if (currentPage >= totalPages - 1) {
		// If current page is near the end, show ellipsis for the first page and last 3 pages
		pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
	} else {
		// Show current page and two pages before and after, with ellipses for the first and last pages
		pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
		pageNumbers.unshift(1, '...');
		pageNumbers.push('...', totalPages);
	}

	// Render the pagination buttons
	return (
		<div className='pagination'>
			{/* Previous button, disabled if current page is the first page */}
			<button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
				Prev
			</button>
			{/* Map through page numbers and ellipses, highlight the current page */}
			{pageNumbers.map((number, idx) =>
				number === '...' ? (
					<span key={`ellipsis-${idx}`}>...</span>
				) : (
					<button key={`page-${number}`} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
						{number}
					</button>
				),
			)}
			{/* Next button, disabled if current page is the last page */}
			<button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
