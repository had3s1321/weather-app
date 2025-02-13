'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/data/contexts/themeContext';

const ThemeToggler = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return <button onClick={toggleTheme}>Toggle theme: {theme}</button>;
};

export default ThemeToggler;
