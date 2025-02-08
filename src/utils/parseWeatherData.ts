import { APIData } from '@/utils/types/WeatherData';
import { convertWeatherIcon } from '@/utils/convertWeatherIcons';
import { ParsedWeatherData } from '@/utils/types/WeatherData';

export const parseWeatherData = (data: APIData): ParsedWeatherData => {
	return {
		currentTemp: data.current.temp,
		currentWeather: convertWeatherIcon(data.current.weather[0]),
		airConditions: {
			realFeel: data.current.feels_like,
			wind: data.current.wind_speed,
			humidity: data.current.humidity,
			uvi: data.current.uvi
		},
		hourlyForecast: [
			{
				time: data.hourly[2].dt,
				temp: data.hourly[2].temp,
				weather: convertWeatherIcon(data.hourly[2].weather[0])
			},
			{
				time: data.hourly[5].dt,
				temp: data.hourly[5].temp,
				weather: convertWeatherIcon(data.hourly[5].weather[0])
			},
			{
				time: data.hourly[8].dt,
				temp: data.hourly[8].temp,
				weather: convertWeatherIcon(data.hourly[8].weather[0])
			},
			{
				time: data.hourly[11].dt,
				temp: data.hourly[11].temp,
				weather: convertWeatherIcon(data.hourly[11].weather[0])
			},
			{
				time: data.hourly[14].dt,
				temp: data.hourly[14].temp,
				weather: convertWeatherIcon(data.hourly[14].weather[0])
			},
			{
				time: data.hourly[17].dt,
				temp: data.hourly[17].temp,
				weather: convertWeatherIcon(data.hourly[17].weather[0])
			}
		],
		dailyForecast: [
			{
				time: data.daily[0].dt,
				temp: {
					minTemp: data.daily[0].temp.min,
					maxTemp: data.daily[0].temp.max
				},
				weather: convertWeatherIcon(data.daily[0].weather[0])
			},
			{
				time: data.daily[1].dt,
				temp: {
					minTemp: data.daily[1].temp.min,
					maxTemp: data.daily[1].temp.max
				},
				weather: convertWeatherIcon(data.daily[1].weather[0])
			},
			{
				time: data.daily[2].dt,
				temp: {
					minTemp: data.daily[2].temp.min,
					maxTemp: data.daily[2].temp.max
				},
				weather: convertWeatherIcon(data.daily[2].weather[0])
			},
			{
				time: data.daily[3].dt,
				temp: {
					minTemp: data.daily[3].temp.min,
					maxTemp: data.daily[3].temp.max
				},
				weather: convertWeatherIcon(data.daily[3].weather[0])
			},
			{
				time: data.daily[4].dt,
				temp: {
					minTemp: data.daily[4].temp.min,
					maxTemp: data.daily[4].temp.max
				},
				weather: convertWeatherIcon(data.daily[4].weather[0])
			},
			{
				time: data.daily[5].dt,
				temp: {
					minTemp: data.daily[5].temp.min,
					maxTemp: data.daily[5].temp.max
				},
				weather: convertWeatherIcon(data.daily[5].weather[0])
			},
			{
				time: data.daily[6].dt,
				temp: {
					minTemp: data.daily[6].temp.min,
					maxTemp: data.daily[6].temp.max
				},
				weather: convertWeatherIcon(data.daily[6].weather[0])
			}
		],
		weatherOverview: data.weather_overview,
		homePanelData: [
			{
				title: 'Real Feel:',
				icon: 'meteocons:thermometer-celsius-fill',
				value: data.current.feels_like,
				valueType: 'temperature'
			},
			{
				title: 'UV Index:',
				icon: 'meteocons:uv-index-fill',
				value: data.current.uvi
			},
			{
				title: 'Min Temp:',
				icon: 'meteocons:thermometer-colder',
				value: data.daily[0].temp.max,
				valueType: 'temperature'
			},
			{
				title: 'Max Temp:',
				icon: 'meteocons:thermometer-warmer',
				value: data.daily[0].temp.min,
				valueType: 'temperature'
			}
		],
		cityPanelData: [
			{
				title: 'Real Feel:',
				icon: 'meteocons:thermometer-celsius-fill',
				value: data.current.feels_like,
				valueType: 'temperature'
			},
			{
				title: 'Humidity:',
				icon: 'meteocons:humidity-fill',
				value: data.current.humidity,
				valueType: 'percentage'
			},
			{
				title: 'Wind:',
				icon: 'meteocons:dust-wind-fill',
				value: data.current.wind_speed,
				valueType: 'speed'
			},
			{
				title: 'UV Index:',
				icon: 'meteocons:uv-index-fill',
				value: data.current.uvi
			}
		]
	};
};
