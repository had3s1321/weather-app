'use client';

import { useState } from 'react';
import { StyledInput } from './styles';

const SearchBar = () => {
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<form>
			<StyledInput
				onChange={handleChange}
				value={value}
				type='text'
				placeholder='Search a city...'
			/>
		</form>
	);
};

export default SearchBar;
