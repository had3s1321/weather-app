import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const storedValue = window.localStorage.getItem(key);
	const item = storedValue ? JSON.parse(storedValue) : initialValue;
	const [state, setState] = useState<T>(item);

	const updateState = (value: T) => {
		window.localStorage.setItem(key, JSON.stringify(value));
		setState(value);
	};

	return [state, updateState] as const;
}
