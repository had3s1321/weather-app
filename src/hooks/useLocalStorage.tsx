'use client';

import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export default function useLocalStorage<T>(
	key: string,
	defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
	const isMounted = useRef(false);
	const [value, setValue] = useState<T>(defaultValue);

	useEffect(() => {
		try {
			const item = window.localStorage.getItem(key);
			if (item) {
				setValue(JSON.parse(item));
			}
		} catch (e) {
			if (typeof e === 'string') {
				throw new Error(e);
			} else if (e instanceof Error) {
				throw new Error(e.message);
			}
		}
		return () => {
			isMounted.current = false;
		};
	}, [key]);

	useEffect(() => {
		if (isMounted.current) {
			window.localStorage.setItem(key, JSON.stringify(value));
		} else {
			isMounted.current = true;
		}
	}, [key, value]);

	return [value, setValue];
}
