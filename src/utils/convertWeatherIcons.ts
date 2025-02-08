import { type Weather } from './types/WeatherData';

const iconsArray = [
	{ id: '01d', icon: 'meteocons:clear-day-fill' },
	{ id: '02d', icon: 'meteocons:partly-cloudy-day-fill' },
	{ id: '03d', icon: 'meteocons:cloudy-fill' },
	{ id: '04d', icon: 'meteocons:extreme-fill' },
	{ id: '09d', icon: 'meteocons:overcast-rain-fill' },
	{ id: '10d', icon: 'meteocons:overcast-day-rain-fill' },
	{ id: '11d', icon: 'meteocons:thunderstorms-overcast-fill' },
	{ id: '13d', icon: 'meteocons:extreme-snow-fill' },
	{ id: '50d', icon: 'meteocons:mist-fill' },
	{ id: '01n', icon: 'meteocons:clear-night-fill' },
	{ id: '02n', icon: 'meteocons:partly-cloudy-night-fill' },
	{ id: '03n', icon: 'meteocons:cloudy-fill' },
	{ id: '04n', icon: 'meteocons:extreme-fill' },
	{ id: '09n', icon: 'meteocons:overcast-rain-fill' },
	{ id: '10n', icon: 'meteocons:overcast-night-rain-fill' },
	{ id: '11n', icon: 'meteocons:overcast-day-rain-fill' },
	{ id: '13n', icon: 'meteocons:extreme-snow-fill' },
	{ id: '50n', icon: 'meteocons:mist-fill' }
];

export const convertWeatherIcon = (object: Weather) => {
	return {
		...object,
		icon:
			iconsArray.find((icon) => icon.id === object['icon'])?.icon ||
			'meteocons:code-orange-fill'
	};
};
