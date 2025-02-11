'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { getCurrentCoords } from '@/utils/getCurrentCoords';
import { encryptData } from '@/utils/textEncryption';

const InfoCard = () => {
	useEffect(() => {
		if (Cookies.get('client-location')) return;
		getCurrentCoords((coords) => {
			encryptData(coords).then((response) => {
				Cookies.set('client-location', response, {
					secure: true,
					expires: 7
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
