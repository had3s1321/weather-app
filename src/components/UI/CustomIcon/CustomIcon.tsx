import { icons } from '@/components/UI/CustomIcon/icons';

const CustomIcon = ({
	icon,
	height,
	width
}: {
	icon: string;
	height: string;
	width: string;
}) => {
	const jsx = icons[icon];
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={width}
			height={height}
			viewBox='0 0 512 512'
		>
			{jsx}
		</svg>
	);
};

export default CustomIcon;
