'use client';

import { createContext, useState } from 'react';

export const WeatherContext = createContext({});

export const WeatherProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [locationData, setLocationData] = useState({});
	const [weatherData, setWeatherData] = useState({});

	return (
		<WeatherContext.Provider value={{ locationData, weatherData }}>
			{children}
		</WeatherContext.Provider>
	);
};
