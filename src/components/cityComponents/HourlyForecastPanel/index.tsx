import CustomIcon from '@/components/UI/CustomIcon/CustomIcon';
import { getHour } from '@/utils/convertTime';
import { handleUnitType } from '@/utils/handleUnitType';
import { ParsedHourlyForecast } from '@/utils/types/WeatherData';
import { Card, Flex, Text } from '@/components/UI/globals';

interface HourlyPanelProps {
	hourlyForecast: ParsedHourlyForecast[];
}

const HourlyForecastPanel = ({ hourlyForecast }: HourlyPanelProps) => {
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
							<CustomIcon icon={el.weather.icon} width='64px' height='64px' />
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

export default HourlyForecastPanel;
