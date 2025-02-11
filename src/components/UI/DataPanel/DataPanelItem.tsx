import { Icon } from '@iconify/react';
import { Flex, Text } from '@/components/UI/globals/index';
import { handleUnitType } from '@/utils/handleUnitType';
import { PanelData } from '@/utils/types/WeatherData';

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
