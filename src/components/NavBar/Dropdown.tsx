'use client';

import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { WeatherContext } from '@/lib/contexts/weatherContext';
import { StyledList } from './styles';

const Dropdown = () => {
	const { cities } = useContext(WeatherContext);
	return (
		<StyledList>
			<li>
				<p>Cities</p>
				<ul>
					{cities.map((city) => (
						<li key={city}>
							<Link href={`/city/${city}`}>
								<Image src='' alt='' /> {city}
							</Link>
						</li>
					))}
				</ul>
			</li>
		</StyledList>
	);
};

export default Dropdown;
