import { ParsedWeatherData } from '@/utils/types/WeatherData';

const ChildComponent = ({ data }: { data: ParsedWeatherData }) => {
	return (
		<div>
			<h2>Weather Data: {data.panelData.uvi}</h2>
		</div>
	);
};

export default ChildComponent;
