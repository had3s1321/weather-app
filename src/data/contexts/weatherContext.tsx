'use client';

import { createContext } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

interface WeatherContextInterface {
	currentLocation: string;
	cities: string[];
	setCurrentLocation: React.Dispatch<React.SetStateAction<string>>;
	setCities: React.Dispatch<React.SetStateAction<string[]>>;
}

export const WeatherContext = createContext<WeatherContextInterface>({
	currentLocation: '',
	cities: [],
	setCurrentLocation: () => {},
	setCities: () => {}
});

export const WeatherProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [currentLocation, setCurrentLocation] = useLocalStorage(
		'CURRENT_LOCATION_STORAGE',
		[]
	);
	const [cities, setCities] = useLocalStorage('CITIES_STORAGE', []);

	return (
		<WeatherContext.Provider
			value={{ currentLocation, cities, setCurrentLocation, setCities }}
		>
			{children}
		</WeatherContext.Provider>
	);
};
