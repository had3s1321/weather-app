'use server';

import { fetchWeatherData } from '@/utils/fetchWeatherData';
import { parseWeatherData } from '@/utils/parseWeatherData';
import { ParsedWeatherData } from '@/utils/types/WeatherData';

export const getWeatherData = async () => {
	const response = await fetchWeatherData({
		url: `https://api.openweathermap.org/data/3.0/onecall?lat=45.7558&lon=21.2322&exclude=minutely,alerts&appid=${process.env.WEATHER_API_KEY}&units=metric`
	});

	return parseWeatherData(response.body);
};
