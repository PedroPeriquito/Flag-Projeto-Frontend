import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('forest');

	const toggleTheme = () => {
		setTheme(prevTheme => {
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
		});
	};

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
