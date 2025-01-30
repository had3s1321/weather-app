'use client';

import { ThemeContext } from '@/lib/contexts/themeContext';
import { useContext } from 'react';

const ThemeToggler = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return <button onClick={toggleTheme}>Toggle theme: {theme}</button>;
};

export default ThemeToggler;
