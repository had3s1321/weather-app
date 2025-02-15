'use client';

import { Text } from '@/components/UI/globals/index';

const CurrentLocation = () => {
	const currentLocation = 'London';

	return (
		<Text>
			Current location:
			{currentLocation}
		</Text>
	);
};

export default CurrentLocation;
