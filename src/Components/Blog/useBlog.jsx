import { useContext } from 'react';
import { BlogContext } from './BlogContext';

// Hook personalizado para facilitar o uso do contexto
const useBlog = () => useContext(BlogContext);

export { useBlog };
