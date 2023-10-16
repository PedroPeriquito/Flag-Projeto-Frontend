import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

// Create a new context named ThemeContext
export const ThemeContext = createContext();

// Define the ThemeProvider component
export const ThemeProvider = ({ children }) => {
	// Read theme from local storage or use 'forest' as default
	const savedTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(savedTheme || 'forest'); // State to manage the current theme

	// Function to toggle the theme and update local storage
	const toggleTheme = () => {
		setTheme(prevTheme => {
			const newTheme = getNextTheme(prevTheme); // Get the next theme in the cycle
			localStorage.setItem('theme', newTheme); // Save the new theme to local storage
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

// PropTypes validation for the ThemeProvider component
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
