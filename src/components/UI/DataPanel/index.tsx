import DataPanelItem from '@/components/UI/DataPanel/DataPanelItem';
import ModalToggler from '@/components/UI/DataPanel/ModalToggler';
import { PanelData } from '@/utils/types/WeatherData';
import { Card, Flex, Text } from '@/components/UI/globals/index';

interface DataPanelProps {
	title: string;
	hasDetailPage?: boolean;
	panelData: PanelData[];
}

const DataPanel = ({ title, hasDetailPage, panelData }: DataPanelProps) => {
	return (
		<Card $height='calc(30% - 12px)'>
			<Flex $justify='space-between' $height='30%'>
				<Text $weight='700'>{title}</Text>
				{hasDetailPage && <ModalToggler />}
			</Flex>
			<Flex $justify='space-between' $width='65%' $height='70%'>
				<Flex $column $justify='space-between'>
					{panelData.map((item, index) => {
						if ((index + 1) % 2)
							return (
								<DataPanelItem
									key={item.title}
									title={item.title}
									icon={item.icon}
									value={item.value}
									valueType={item.valueType}
								/>
							);
					})}
				</Flex>
				<Flex $column $justify='space-between'>
					{panelData.map((item, index) => {
						if (!((index + 1) % 2))
							return (
								<DataPanelItem
									key={item.title}
									title={item.title}
									icon={item.icon}
									value={item.value}
									valueType={item.valueType}
								/>
							);
					})}
				</Flex>
			</Flex>
		</Card>
	);
};

export default DataPanel;
