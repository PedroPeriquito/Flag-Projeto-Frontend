import PropTypes from 'prop-types';
import { createContext, useState } from 'react';


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
	
	const savedTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(savedTheme || 'forest'); 

	// Function to toggle the theme and update local storage
	const toggleTheme = () => {
		setTheme(prevTheme => {
			const newTheme = getNextTheme(prevTheme); 
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	// Function to get the next theme in the cycle
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

	// Provide the theme and toggleTheme function to the context's consumers
	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};


ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
