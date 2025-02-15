import { getWeatherData } from '@/actions/getWeatherData';
import { getCoordsFromCookie } from '@/actions/getCoordsFromCookie';
import { ParsedWeatherData } from '@/utils/types/WeatherData';
import { fetchCityCoords, fetchCityName } from '@/utils/fetchLocationData';

const DataFetcher = async ({
	children,
	path
}: {
	// eslint-disable-next-line no-unused-vars
	children: (arg: ParsedWeatherData) => React.ReactNode;
	path: string;
}) => {
	const { lat, lon } =
		path === 'Home' ? await getCoordsFromCookie() : await fetchCityCoords(path);
	const location = path === 'Home' ? await fetchCityName({ lat, lon }) : path;
	const weather = await getWeatherData(lat, lon);
	const data = { ...weather, currentLocation: location };
	return <>{children(data)}</>;
};

export default DataFetcher;
