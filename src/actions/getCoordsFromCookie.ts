'use server';

import { decryptData } from '@/utils/textEncryption';
import { cookies } from 'next/headers';

export const getCoordsFromCookie = async () => {
	const cookiesStore = await cookies();
	const coords = cookiesStore.get('client-location');
	if (coords) return decryptData(coords.value);
	else throw new Error('Cookie not found');
};
