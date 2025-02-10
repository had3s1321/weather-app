'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { getCurrentCoords } from '@/utils/getCurrentCoords';

const InfoCard = () => {
	useEffect(() => {
		if (Cookies.get('client-location')) return;
		getCurrentCoords((coords) => {
			Cookies.set('client-location', JSON.stringify(coords));
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
