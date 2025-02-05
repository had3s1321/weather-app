export const handleUnitType = (value: number, valueType: string) => {
	switch (valueType) {
		case 'temperature':
			return `${Math.round(value)}°C`;
		case 'percentage':
			return `${value}%`;
		case 'speed':
			return `${value} km/h`;
		default:
			return 'N/A';
	}
};
