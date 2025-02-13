'use client';

import { useEffect, useContext } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { WeatherContext } from '@/data/contexts/weatherContext';
import { getCurrentCoords } from '@/utils/getCurrentCoords';
import { fetchCityName } from '@/utils/fetchLocationData';
import { encryptData } from '@/utils/textEncryption';

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
