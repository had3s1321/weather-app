import { Icon } from '@iconify/react';
import { PanelData } from '@/utils/types/WeatherData';
import { handleUnitType } from '@/utils/handleUnitType';
import { Flex, Text } from '@/components/UI/globals/index';

const DataPanelItem = ({ title, icon, value, valueType }: PanelData) => {
	return (
		<Flex>
			<Icon icon={icon} width='32' height='32' />
			<Flex $column>
				<Text $size='20px'>{title}</Text>
				<Text $size='24px' $weight='700'>
					{handleUnitType(value, valueType)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default DataPanelItem;
