'use client';

import { useEffect, useContext } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { getCurrentCoords } from '@/utils/getCurrentCoords';
import { encryptData } from '@/utils/textEncryption';
import { WeatherContext } from '@/lib/contexts/weatherContext';
import { fetchCityName } from '@/utils/fetchLocationData';

const InfoCard = () => {
	const { setCurrentLocation } = useContext(WeatherContext);

	useEffect(() => {
		if (Cookies.get('client-location')) return;
		getCurrentCoords((coords) => {
			fetchCityName(coords).then((response) => setCurrentLocation(response));
			encryptData(coords).then((response) => {
				Cookies.set('client-location', response, {
					secure: true,
					expires: 1
				});
			});
		});
	}, []);

	return (
		<div>
			<p>
				Please accept the request to use location and press
				&ldquo;Continue&ldquo;
			</p>
			<Link href='/'>Continue</Link>
		</div>
	);
};

export default InfoCard;
