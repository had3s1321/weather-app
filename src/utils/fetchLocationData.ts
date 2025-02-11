'use server';

import { Coords } from './getCurrentCoords';

export const fetchCityName = async ({ lat, lon }: Coords) => {
	const response = await fetch(
		`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${process.env.WEATHER_API_KEY}`
	);
	if (!response.ok) {
		throw new Error('Failed to connect to Weather API');
	}
	const data = await response.json();
	return `${data[0].name}, ${data[0].country}`;
};

export const fetchCityCoords = async (query: string) => {
	const response = await fetch(
		`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.WEATHER_API_KEY}`
	);
	if (!response.ok) {
		throw new Error('Failed to connect to Weather API');
	}
	const data = await response.json();
	const { lat, lon } = data[0];
	return { lat, lon };
};
