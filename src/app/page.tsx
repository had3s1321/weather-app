import DataFetcher from '@/components/UI/DataFetcher/DataFetcher';

export default function Home() {
	return (
		<DataFetcher>{(data) => <h1>{data.airConditions.wind}</h1>}</DataFetcher>
	);
}
