import { getWeatherData } from '@/actions/getWeatherData';
import { getCoordsFromCookie } from '@/actions/getCoordsFromCookie';
import { ParsedWeatherData } from '@/utils/types/WeatherData';

const DataFetcher = async ({
	children
}: {
	// eslint-disable-next-line no-unused-vars
	children: (arg: ParsedWeatherData) => React.ReactNode;
}) => {
	const { lat, lon } = await getCoordsFromCookie();
	const data = await getWeatherData(lat, lon);
	return <>{children(data)}</>;
};

export default DataFetcher;
