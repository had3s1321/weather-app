'use server';

import { APIData } from '@/utils/types/WeatherData';

export const fetchWeatherData = async ({
	cache = 'force-cache',
	headers,
	urls
}: {
	cache?: RequestCache;
	headers?: HeadersInit;
	urls: string[];
}): Promise<APIData | never> => {
	const options: RequestInit = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			...headers
		} as HeadersInit,
		cache
	};

	const responses = [];
	for (const url of urls) {
		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error('Failed to connect to Weather API');
		}
		const body = await response.json();
		responses.push(body);
	}
	const body = Object.assign({}, ...responses);
	return body;
};
