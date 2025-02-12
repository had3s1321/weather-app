'use client';

import Link from 'next/link';
import Image from 'next/image';
import { StyledList } from './styles';
import { useContext } from 'react';
import { WeatherContext } from '@/lib/contexts/weatherContext';

const Dropdown = () => {
	const { cities, setCities } = useContext(WeatherContext);

	return (
		<StyledList>
			<li>
				<p>Cities</p>
				<ul>
					{cities.map((city) => (
						<li key={city}>
							<Link href={`/city/${city}`}>
								<Image src='' alt='' /> {city}
								<button
									onClick={() =>
										setCities((prev) => prev.filter((el) => el !== city))
									}
								></button>
							</Link>
						</li>
					))}
				</ul>
			</li>
		</StyledList>
	);
};

export default Dropdown;
