import { Icon } from '@iconify-icon/react';
import { Flex, Text } from '@/components/UI/globals/index';
import { handleUnitType } from '@/utils/handleUnitType';

const DataPanelItem = ({ title, icon, value, valueType }) => {
	return (
		<Flex>
			<Icon icon={icon} width='32' height='32' />
			<Flex column>
				<Text size='20px'>{title}</Text>
				<Text size='24px' weight='700'>
					{handleUnitType(value, valueType)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default DataPanelItem;
