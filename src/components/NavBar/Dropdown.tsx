'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WeatherContext } from '@/data/contexts/weatherContext';
import { StyledList } from '@/components/NavBar/styles';

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
