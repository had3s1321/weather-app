'use client';

import { createContext, useState } from 'react';

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
	const [currentLocation, setCurrentLocation] = useState<string>('');

	return (
		<WeatherContext.Provider value={{ currentLocation, setCurrentLocation }}>
			{children}
		</WeatherContext.Provider>
	);
};
