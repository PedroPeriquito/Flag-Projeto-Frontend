/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

// 2. Defina o reducer
import { BlogReducer } from './BlogReducer';

// 1. Criar o contexto
export const BlogContext = createContext();

// 3. Defina o provider
export const BlogProvider = ({ children }) => {
	const [state, dispatch] = useReducer(BlogReducer, []);

	return <BlogContext.Provider value={{ posts: state, dispatch }}>{children}</BlogContext.Provider>;
};

/* Envolver o seu aplicativo com o PostProvider (app.jsx). */
