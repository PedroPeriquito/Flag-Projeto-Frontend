import { useContext } from 'react';
import { BlogContext } from './BlogContext';

// Custom hook for using the BlogContext
const useBlog = () => useContext(BlogContext);

export { useBlog };
