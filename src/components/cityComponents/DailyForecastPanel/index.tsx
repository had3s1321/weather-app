import CustomIcon from '@/components/UI/CustomIcon/CustomIcon';
import { getDay } from '@/utils/convertTime';
import { handleUnitType } from '@/utils/handleUnitType';
import { ParsedDailyForecast } from '@/utils/types/WeatherData';
import { Card, Flex, Text, Span } from '@/components/UI/globals';

interface DailyForecastProps {
	dailyForecast: ParsedDailyForecast[];
}

const DailyForecastPanel = ({ dailyForecast }: DailyForecastProps) => {
	return (
		<Card $height='100%'>
			<Flex $column $justify='space-between' $width='100%' $height='100%'>
				<Text $weight='700'>7-Day Forecast</Text>
				<Flex $column $width='100%' $gap='24px'>
					{dailyForecast.map((el) => (
						<Flex
							key={el.time}
							$delimiter
							$justify='space-between'
							$align='center'
							$width='100%'
						>
							<Text $width='25%'>{getDay(el.time)}</Text>
							<Flex $justify='space-evenly' $align='center' $width='50%'>
								<CustomIcon icon={el.weather.icon} width='64px' height='64px' />
								<Text $weight='700'>{el.weather.main}</Text>
							</Flex>
							<Text $align='end' $width='25%'>
								<Span>{handleUnitType(el.temp.minTemp, 'temperature')}</Span>/
								<Span $weight='700'>
									{handleUnitType(el.temp.maxTemp, 'temperature')}
								</Span>
							</Text>
						</Flex>
					))}
				</Flex>
			</Flex>
		</Card>
	);
};

export default DailyForecastPanel;
