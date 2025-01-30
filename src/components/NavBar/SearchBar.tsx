import { useState } from 'react';

const SearchCityForm = () => {
	const [value, setValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	return (
		<form>
			<input
				onChange={handleChange}
				value={value}
				type='text'
				placeholder='Search a city...'
			/>
		</form>
	);
};

export default SearchCityForm;
