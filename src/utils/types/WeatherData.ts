export type Weather = {
	id: number;
	main: string;
	description: string;
	icon?: string;
};

type DetailedTemperature = {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
};

type DetailedRealFeel = {
	day: number;
	night: number;
	eve: number;
	morn: number;
};

export type Temperature = number | DetailedTemperature;
export type RealFeel = number | DetailedRealFeel;

interface HourlyForecast {
	dt: number;
	temp: Temperature;
	feels_like: RealFeel;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number; //
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: Weather[];
}

interface CurrentForecast extends HourlyForecast {
	sunrise: number;
	sunset: number;
}

interface DailyForecast extends CurrentForecast {
	moonrise: number;
	moonset: number;
	moon_phase: number;
	pop: number;
	summary: string;
	temp: DetailedTemperature;
	feels_like: DetailedRealFeel;
}

export interface APIData {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: CurrentForecast;
	hourly: HourlyForecast[];
	daily: DailyForecast[];
	weather_overview?: string;
}

export interface ParsedWeatherData {
	currentTemp: Temperature;
	currentWeather: Weather;
	airConditions: {
		realFeel: RealFeel;
		wind: number;
		humidity: number;
		uvi: number;
	};
	hourlyForecast: {
		time: number;
		temp: Temperature;
		weather: Weather;
	}[];

	dailyForecast: {
		time: number;
		temp: {
			minTemp: number;
			maxTemp: number;
		};
		weather: Weather;
	}[];
	weatherOverview?: string;
	panelData: {
		feelsLike: RealFeel;
		maxTemp: number;
		minTemp: number;
		uvi: number;
	};
}
