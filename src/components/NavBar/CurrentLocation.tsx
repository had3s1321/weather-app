'use client';

import { useContext } from 'react';
import { Text } from '../UI/globals';
import { WeatherContext } from '@/lib/contexts/weatherContext';

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
