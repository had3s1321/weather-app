'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { setCookie, getCookie } from 'cookies-next';
import { getCurrentCoords } from '@/utils/getCurrentCoords';
import { encryptData } from '@/utils/textEncryption';

const InfoCard = () => {
	useEffect(() => {
		if (getCookie('client-location')) return;
		getCurrentCoords((coords) => {
			encryptData(coords).then((response) => {
				setCookie('client-location', response, {
					secure: true,
					maxAge: 60 * 60 * 24
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
