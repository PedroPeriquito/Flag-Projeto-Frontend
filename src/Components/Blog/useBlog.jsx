import { useContext } from 'react';
import { BlogContext } from './BlogContext';

// Custom hook for using the BlogContext
const useBlog = () => {
	// Accessing the context value using the useContext hook
	const blogContext = useContext(BlogContext);

	// Returning the context value for consumption by components
	return blogContext;
};

export { useBlog };
