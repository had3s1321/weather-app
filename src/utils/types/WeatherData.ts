export type Weather = {
	id: number;
	main: string;
	description: string;
	icon: string;
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

interface HourlyForecast {
	dt: number;
	temp: number | DetailedTemperature; //need to be overwritten
	feels_like: number | DetailedRealFeel; //need to be overwritten
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
	weather_overview: string;
}
