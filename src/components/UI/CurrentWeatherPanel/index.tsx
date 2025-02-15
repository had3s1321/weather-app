'use client';

import CustomIcon from '../CustomIcon/CustomIcon';
import { handleUnitType } from '@/utils/handleUnitType';
import { Weather } from '@/utils/types/WeatherData';
import { Card, Flex, Title, Text } from '@/components/UI/globals/index';

interface CurrentWeatherPanelProps {
	currentLocation: string;
	currentTemp: number;
	currentWeather: Weather;
	padding?: boolean;
}

const CurrentWeatherPanel = ({
	currentLocation,
	currentTemp,
	currentWeather: { main, description, icon },
	padding
}: CurrentWeatherPanelProps) => {
	return (
		<Card
			$borderless
			$marginBottom='24px'
			$height='calc(35% - 16px)'
			$outer={padding}
		>
			<Flex $height='100%' $justify='space-between'>
				<Flex $column $justify='space-between'>
					<Flex $column>
						<Title>{currentLocation}</Title>
						<Text $size='12px'>
							{main} - {description}
						</Text>
					</Flex>
					<Text $size='56px' $weight='700'>
						{handleUnitType(currentTemp, 'temperature')}
					</Text>
				</Flex>
				<Flex $justify='center' $align='center'>
					<CustomIcon icon={icon} width='254px' height='254px' />
				</Flex>
			</Flex>
		</Card>
	);
};

export default CurrentWeatherPanel;
