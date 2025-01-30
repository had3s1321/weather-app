'use client';

import { createContext, useState } from 'react';

export const WeatherContext = createContext({
	cities: [],
	weatherData: {},
	setCities: {}, // don't know why it worked, need to figure it out
	setWeatherData: {} // don't know why it worked, need to figure it out
});

export const WeatherProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [cities, setCities] = useState([]);
	const [weatherData, setWeatherData] = useState({});

	return (
		<WeatherContext.Provider
			value={{ cities, weatherData, setCities, setWeatherData }}
		>
			{children}
		</WeatherContext.Provider>
	);
};
