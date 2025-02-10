'use server';

import { fetchWeatherData } from '@/utils/fetchWeatherData';
import { parseWeatherData } from '@/utils/parseWeatherData';

export const getWeatherData = async (lat: number, lon: number) => {
	const response = await fetchWeatherData({
		urls: [
			`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${process.env.WEATHER_API_KEY}&units=metric`,
			`https://api.openweathermap.org/data/3.0/onecall/overview?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}&units=metric`
		]
	});
	return parseWeatherData(response);
};
