import { Text } from '../UI/globals';

const CurrentLocation = () => {
	const currentLocation = 'London';

	return (
		<Text>
			Current location:
			{currentLocation}
		</Text>
	);
};

export default CurrentLocation;
