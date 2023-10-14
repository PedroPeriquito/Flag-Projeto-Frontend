import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('forest');

	const toggleTheme = () => {
		setTheme(theme === 'forest' ? 'canyon' : 'forest');
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
