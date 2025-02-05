import DataFetcher from '@/components/UI/DataFetcher/index';

export default function Home() {
	return (
		<DataFetcher>{(data) => <h1>{data.airConditions.wind}</h1>}</DataFetcher>
	);
}
