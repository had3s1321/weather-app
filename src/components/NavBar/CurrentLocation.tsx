'use client';

import { useState, useEffect } from 'react';
import { Text } from '../UI/globals';
import { getCurrentCoords, Coords } from '@/utils/getCurrentCoords';
import Cookies from 'js-cookie';

const CurrentLocation = () => {
	const [coords, setCoords] = useState<Coords>({ lat: null, lon: null });
	const currentLocation = 'London';

	useEffect(() => {
		if (coords.lat && coords.lon) return;
		getCurrentCoords((coords) => {
			setCoords(coords);
			Cookies.set('client-location', JSON.stringify(coords));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Text>
			Current location:
			{currentLocation}
		</Text>
	);
};

export default CurrentLocation;
