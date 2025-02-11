'use client';

import { createContext } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

interface WeatherContextInterface {
	currentLocation: string;

	setCurrentLocation: React.Dispatch<React.SetStateAction<string>>;
}

export const WeatherContext = createContext<WeatherContextInterface>({
	currentLocation: '',
	setCurrentLocation: () => {}
});

export const WeatherProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [currentLocation, setCurrentLocation] = useLocalStorage(
		'WEATHER_STORAGE',
		[]
	);

	return (
		<WeatherContext.Provider value={{ currentLocation, setCurrentLocation }}>
			{children}
		</WeatherContext.Provider>
	);
};
