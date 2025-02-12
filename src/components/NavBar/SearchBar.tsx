'use client';

import { useContext, useState } from 'react';
import { StyledInput } from './styles';
import { WeatherContext } from '@/lib/contexts/weatherContext';
import { capitalizeCityName } from '@/utils/capitalizeCityName';
import { fetchCityCoords } from '@/utils/fetchLocationData';

const SearchBar = () => {
	const [value, setValue] = useState('');
	const { cities, setCities } = useContext(WeatherContext);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		setValue(e.target.value);

	const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!value) return;
		if (
			cities.some(
				(el) =>
					`${el[0].toLocaleUpperCase()}${el.substring(1, el.length - 4)}` ===
					capitalizeCityName(value)
			)
		)
			throw new Error('City already included in the list!');
		fetchCityCoords(value).then((response) =>
			setCities([...cities, response.name])
		);
		setValue('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<StyledInput
				$width='200px'
				onChange={handleChange}
				value={value}
				type='text'
				placeholder='Search a city...'
			/>
		</form>
	);
};

export default SearchBar;
