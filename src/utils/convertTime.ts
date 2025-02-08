export const getDay = (timestamp: number) => {
	const date = new Date(timestamp * 1000);
	return date.toString().slice(0, 3);
};

export const getHour = (timestamp: number) => {
	const date = new Date(timestamp * 1000);
	const time = date.toString().split(' ')[4];
	return `${time.slice(0, 2)}:00`;
};
