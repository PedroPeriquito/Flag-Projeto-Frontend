import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	// Read theme from local storage or use 'forest' as default
	const savedTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(savedTheme || 'forest');

	// Update local storage whenever theme changes
	const toggleTheme = () => {
		setTheme(prevTheme => {
			const newTheme = getNextTheme(prevTheme);
			localStorage.setItem('theme', newTheme); // Save theme to local storage
			return newTheme;
		});
	};

	// Define a function to get the next theme in the cycle
	const getNextTheme = prevTheme => {
		switch (prevTheme) {
			case 'forest':
				return 'canyon';
			case 'canyon':
				return 'snow';
			case 'snow':
				return 'desert';
			case 'desert':
				return 'forest';
			default:
				return 'forest';
		}
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
