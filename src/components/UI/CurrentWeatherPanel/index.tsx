'use client';

import { useContext } from 'react';
import { Icon } from '@iconify/react';
import { WeatherContext } from '@/data/contexts/weatherContext';
import { handleUnitType } from '@/utils/handleUnitType';
import { Weather } from '@/utils/types/WeatherData';
import { Card, Flex, Title, Text } from '@/components/UI/globals/index';

interface CurrentWeatherPanelProps {
	currentTemp: number;
	currentWeather: Weather;
	padding?: boolean;
}

const CurrentWeatherPanel = ({
	currentTemp,
	currentWeather: { main, description, icon },
	padding
}: CurrentWeatherPanelProps) => {
	const { currentLocation } = useContext(WeatherContext);

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
					<Icon icon={icon} width='254' height='254' />
				</Flex>
			</Flex>
		</Card>
	);
};

export default CurrentWeatherPanel;
