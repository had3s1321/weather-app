'use server';

import { APIData } from '@/utils/types/WeatherData';

export const fetchWeatherData = async ({
	cache = 'force-cache',
	headers,
	url
}: {
	cache?: RequestCache;
	headers?: HeadersInit;
	url: string;
}): Promise<{ status: number; body: APIData } | never> => {
	const options: RequestInit = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			...headers
		} as HeadersInit,
		cache
	};

	const response = await fetch(url, options);
	if (!response.ok) {
		throw new Error('Failed to connect to Weather API');
	}
	const body = await response.json();
	return { status: response.status, body };
};
