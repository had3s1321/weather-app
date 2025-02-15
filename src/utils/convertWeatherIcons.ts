import { type Weather } from './types/WeatherData';

const iconsArray = [
	{ id: '01d', icon: 'clear-day-fill' },
	{ id: '02d', icon: 'partly-cloudy-day-fill' },
	{ id: '03d', icon: 'cloudy-fill' },
	{ id: '04d', icon: 'extreme-fill' },
	{ id: '09d', icon: 'overcast-rain-fill' },
	{ id: '10d', icon: 'overcast-day-rain-fill' },
	{ id: '11d', icon: 'thunderstorms-overcast-fill' },
	{ id: '13d', icon: 'extreme-snow-fill' },
	{ id: '50d', icon: 'mist-fill' },
	{ id: '01n', icon: 'clear-night-fill' },
	{ id: '02n', icon: 'partly-cloudy-night-fill' },
	{ id: '03n', icon: 'cloudy-fill' },
	{ id: '04n', icon: 'extreme-fill' },
	{ id: '09n', icon: 'overcast-rain-fill' },
	{ id: '10n', icon: 'overcast-night-rain-fill' },
	{ id: '11n', icon: 'overcast-day-rain-fill' },
	{ id: '13n', icon: 'extreme-snow-fill' },
	{ id: '50n', icon: 'mist-fill' }
];

export const convertWeatherIcon = (object: Weather) => {
	return {
		...object,
		icon:
			iconsArray.find((icon) => icon.id === object['icon'])?.icon ||
			'meteocons:code-orange-fill'
	};
};
