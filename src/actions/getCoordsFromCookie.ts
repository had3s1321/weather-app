'use server';

import { cookies } from 'next/headers';

export const getCoordsFromCookie = async () => {
	const cookiesStore = await cookies();
	const coords = cookiesStore.get('client-location');
	if (coords) return JSON.parse(coords.value);
	throw new Error('Cookie not found');
};
