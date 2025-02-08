import { Icon } from '@iconify/react';
import { Card, Flex, Text } from '@/components/UI/globals';
import { getHour } from '@/utils/convertTime';
import { handleUnitType } from '@/utils/handleUnitType';
import { ParsedHourlyForecast } from '@/utils/types/WeatherData';

interface HourlyPanelProps {
	hourlyForecast: ParsedHourlyForecast[];
}

const HourlyPanel = ({ hourlyForecast }: HourlyPanelProps) => {
	return (
		<Card $height='calc(35% - 16px)' $marginBottom='24px'>
			<Flex $column $justify='space-around' $height='100%'>
				<Text $weight='700' $height='20%'>
					Today&apos;s forecast
				</Text>
				<Flex $justify='space-between' $height='80%%'>
					{hourlyForecast.map((el) => (
						<Flex key={el.time} $column $delimiter>
							<Text $size='20px' $weight='500' $align='center'>
								{getHour(el.time)}
							</Text>
							<Icon icon={el.weather.icon} width='64' height='64' />
							<Text $size='24px' $weight='700' $align='center'>
								{handleUnitType(el.temp, 'temperature')}
							</Text>
						</Flex>
					))}
				</Flex>
			</Flex>
		</Card>
	);
};

export default HourlyPanel;
