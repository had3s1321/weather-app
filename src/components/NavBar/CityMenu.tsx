'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import Dropdown from '@/components/NavBar/Dropdown';
import SearchBar from '@/components/NavBar/SearchBar';
import { fetchCityCoords } from '@/utils/fetchLocationData';
import { capitalizeCityName } from '@/utils/capitalizeCityName';

const CityMenu = () => {
	const [cities, setCities] = useLocalStorage<string[]>('CITIES_STORAGE', []);

	const handleSearch = (value: string) => {
		if (!value) return;
		if (
			cities.some(
				(el) =>
					`${el[0].toLocaleUpperCase()}${el.substring(1, el.length - 4)}` ===
					capitalizeCityName(value)
			)
		)
			throw new Error('City already included in the list!');
		fetchCityCoords(value).then((response) => {
			if (cities.includes(response.name)) return;
			setCities([...cities, response.name]);
		});
	};

	return (
		<>
			<SearchBar handleSearch={handleSearch} />
			<Dropdown cities={cities} />
		</>
	);
};

export default CityMenu;
