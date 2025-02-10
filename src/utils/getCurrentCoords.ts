export interface Coords {
	lat: number | null;
	lon: number | null;
}

// eslint-disable-next-line no-unused-vars
export const getCurrentCoords = (callback: (coords: Coords) => void) => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				const lat = position.coords.latitude;
				const lon = position.coords.longitude;
				callback({ lat, lon });
			},
			() => {
				throw new Error('Unable to retrieve location');
			}
		);
	} else throw new Error('Geolocation not supported');
};
