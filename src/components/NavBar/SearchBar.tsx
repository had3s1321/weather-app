'use client';

import { useState } from 'react';
import { StyledInput } from '@/components/NavBar/styles';

const SearchBar = ({
	handleSearch
}: {
	// eslint-disable-next-line no-unused-vars
	handleSearch: (value: string) => void;
}) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setInputValue(e.target.value);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleSearch(inputValue);
		setInputValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledInput
				$width='200px'
				onChange={handleChange}
				value={inputValue}
				type='text'
				placeholder='Search a city...'
			/>
		</form>
	);
};

export default SearchBar;
