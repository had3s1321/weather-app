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

type PanelItem = {
	title: string;
	icon: string;
	value: number;
	valueType?: string;
};

interface HourlyForecast {
	dt: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility?: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather: Weather[];
}

interface CurrentForecast extends HourlyForecast {
	sunrise: number;
	sunset: number;
	feels_like: number;
	temp: number;
}

interface DailyForecast extends Omit<CurrentForecast, 'feels_like' | 'temp'> {
	moonrise: number;
	moonset: number;
	moon_phase: number;
	pop: number;
	summary: string;
}

interface CompleteHourlyForecast extends HourlyForecast {
	temp: number;
	feels_like: number;
}

interface CompleteDailyForecast extends DailyForecast {
	temp: DetailedTemperature;
	feels_like: DetailedRealFeel;
}

export interface APIData {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: CurrentForecast;
	hourly: CompleteHourlyForecast[];
	daily: CompleteDailyForecast[];
	weather_overview: string;
}

export interface ParsedWeatherData {
	currentTemp: number;
	currentWeather: Weather;
	airConditions: {
		realFeel: number;
		wind: number;
		humidity: number;
		uvi: number;
	};
	hourlyForecast: ParsedHourlyForecast[];
	dailyForecast: ParsedDailyForecast[];
	weatherOverview: string;
	homePanelData: PanelItem[];
	cityPanelData: PanelItem[];
	currentLocation?: string;
}

export interface PanelData {
	title: string;
	icon: string;
	value: number;
	valueType?: string;
}

export interface ParsedHourlyForecast {
	time: number;
	temp: number;
	weather: Weather;
}

export interface ParsedDailyForecast {
	time: number;
	temp: {
		minTemp: number;
		maxTemp: number;
	};
	weather: Weather;
}
