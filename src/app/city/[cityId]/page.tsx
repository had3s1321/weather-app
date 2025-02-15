import NavBar from '@/components/NavBar';
import DailyForecastPanel from '@/components/cityComponents/DailyForecastPanel';
import HourlyForecastPanel from '@/components/cityComponents/HourlyForecastPanel';
import CurrentWeatherPanel from '@/components/UI/CurrentWeatherPanel';
import DataPanel from '@/components/UI/DataPanel';
import { Flex, Card } from '@/components/UI/globals/index';
import DataFetcher from '@/components/UI/DataFetcher';

export default async function Page({
	params
}: {
	params: Promise<{ cityId: string }>;
}) {
	const { cityId } = await params;

	return (
		<>
			<NavBar />
			<DataFetcher path={cityId}>
				{(data) => (
					<Flex $justify='space-between' $gap='28px' $height='100%'>
						<Card
							$outer
							$borderless
							$width='calc(66.6% + 12px)'
							$height='calc(100% - 4px)'
						>
							<CurrentWeatherPanel
								currentLocation={data.currentLocation || 'N/A'}
								currentTemp={data.currentTemp}
								currentWeather={data.currentWeather}
							/>
							<HourlyForecastPanel hourlyForecast={data.hourlyForecast} />
							<DataPanel
								title='Air Conditions'
								hasDetailPage
								panelData={data.cityPanelData}
							/>
						</Card>
						<Card $outer $borderless $width='calc(33.3% + 12px)' $height='100%'>
							<DailyForecastPanel dailyForecast={data.dailyForecast} />
						</Card>
					</Flex>
				)}
			</DataFetcher>
		</>
	);
}
