'use server';

import { fetchWeatherData } from '@/utils/fetchWeatherData';
import { parseWeatherData } from '@/utils/parseWeatherData';

export const getWeatherData = async () => {
	const response = await fetchWeatherData({
		urls: [
			`https://api.openweathermap.org/data/3.0/onecall?lat=45.7558&lon=21.2322&exclude=minutely,alerts&appid=${process.env.WEATHER_API_KEY}&units=metric`,
			`https://api.openweathermap.org/data/3.0/onecall/overview?lat=45.7558&lon=21.2322&appid=${process.env.WEATHER_API_KEY}&units=metric`
		]
	});

	return parseWeatherData(response.body);
};
