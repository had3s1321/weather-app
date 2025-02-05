import { Icon } from '@iconify-icon/react';
import { Card, Flex, Title, Text } from '@/components/UI/globals/index';
import { handleUnitType } from '@/utils/handleUnitType';

interface CurrentWeatherPanelProps {
	currentLocation: string;
	currentTemp: number;
	currentWeather: {
		main: number;
		description: string;
		icon: string;
	};
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
			outer={padding}
			borderless
			height='calc(35% - 16px)'
			marginBottom='24px'
		>
			<Flex height='100%' justify='space-between'>
				<Flex column justify='space-between'>
					<Flex column>
						<Title>{currentLocation}</Title>
						<Text size='12px'>
							{main} - {description}
						</Text>
					</Flex>
					<Text size='56px' weight='700'>
						{handleUnitType(currentTemp, 'temperature')}
					</Text>
				</Flex>
				<Flex justify='center' align='center'>
					<Icon icon={icon} width='254' height='254' />
				</Flex>
			</Flex>
		</Card>
	);
};

export default CurrentWeatherPanel;
