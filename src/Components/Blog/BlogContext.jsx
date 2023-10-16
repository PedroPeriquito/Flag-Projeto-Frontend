import { createContext, useReducer } from 'react';

import { BlogReducer } from './BlogReducer';

// Create a context for the blog
export const BlogContext = createContext();

// Create a provider component for the blog context
export const BlogProvider = ({ children }) => {
	// Use the BlogReducer to manage state
	const [state, dispatch] = useReducer(BlogReducer, []);

	// Render the provider component with the blog context value
	return <BlogContext.Provider value={{ posts: state, dispatch }}>{children}</BlogContext.Provider>;
};
