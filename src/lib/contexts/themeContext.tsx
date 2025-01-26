'use client';
import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../app/styles/themes';

export const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const currentTheme = theme === 'light' ? lightTheme : darkTheme;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
		</ThemeContext.Provider>
	);
};
