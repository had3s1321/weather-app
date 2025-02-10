// import { getWeatherData } from '@/actions/getWeatherData';

import { getCoordsFromCookie } from '@/actions/getCoordsFromCookie';
import { mockData } from '@/lib/mockData';
import { parseWeatherData } from '@/utils/parseWeatherData';
import { ParsedWeatherData } from '@/utils/types/WeatherData';

const DataFetcher = async ({
	children
}: {
	// eslint-disable-next-line no-unused-vars
	children: (arg: ParsedWeatherData) => React.ReactNode;
}) => {
	// const data = await getWeatherData();
	const coords = await getCoordsFromCookie();
	// eslint-disable-next-line no-console
	console.log(coords);
	const data = parseWeatherData(mockData);
	return <>{children(data)}</>;
};

export default DataFetcher;
