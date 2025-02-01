import { getWeatherData } from '@/actions/getWeatherData';
import ChildComponent from './ChildComponent';

const DataFetcher = async () => {
	const data = await getWeatherData();
	return <ChildComponent data={data} />;
};

export default DataFetcher;
