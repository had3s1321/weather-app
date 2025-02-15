import NavBar from '@/components/NavBar';
import CurrentWeatherPanel from '@/components/UI/CurrentWeatherPanel';
import DataFetcher from '@/components/UI/DataFetcher/index';
import DataPanel from '@/components/UI/DataPanel';
import { Flex, Card, Text } from '@/components/UI/globals/index';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<NavBar />
			<DataFetcher path='Home'>
				{(data) => (
					<Flex $gap='24px' $height='100%'>
						<Flex $gap='24px' $column $width='60%' $height='100%'>
							<Card $borderless $image $height='calc(70% - 12px)' $width='100%'>
								<Image
									src='/placeholderImg.jpg'
									alt='Unsplash image'
									width={100}
									height={100}
								/>
							</Card>
							<DataPanel
								title="Today's Weather"
								panelData={data.homePanelData}
							/>
						</Flex>
						<Card $width='40%'>
							<Flex $column $justify='space-between' $gap='24px' $height='100%'>
								<CurrentWeatherPanel
									currentLocation={data.currentLocation || 'N/A'}
									currentTemp={data.currentTemp}
									currentWeather={data.currentWeather}
								/>
								<Flex $column $justify='space-between' $height='60%'>
									{data.weatherOverview.split('. ').map((sentence) => (
										<Text key={sentence}>{sentence}</Text>
									))}
								</Flex>
							</Flex>
						</Card>
					</Flex>
				)}
			</DataFetcher>
		</>
	);
}
