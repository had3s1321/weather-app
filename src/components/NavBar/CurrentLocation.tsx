import { getCoordsFromCookie } from '@/actions/getCoordsFromCookie';
import { Text } from '@/components/UI/globals/index';
import { fetchCityName } from '@/utils/fetchLocationData';

const CurrentLocation = async () => {
	const { lat, lon } = await getCoordsFromCookie();
	const currentLocation = await fetchCityName({ lat, lon });

	return (
		<Text>
			Current location:
			{currentLocation}
		</Text>
	);
};

export default CurrentLocation;
