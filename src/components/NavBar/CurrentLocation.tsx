'use client';

import { useContext } from 'react';
import { WeatherContext } from '@/data/contexts/weatherContext';
import { Text } from '@/components/UI/globals/index';

const CurrentLocation = () => {
	const { currentLocation } = useContext(WeatherContext);

	return (
		<Text>
			Current location:
			{currentLocation}
		</Text>
	);
};

export default CurrentLocation;
