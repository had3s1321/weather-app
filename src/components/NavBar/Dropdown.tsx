'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getCountryName } from '@/utils/getCountryName';
import { StyledList } from '@/components/NavBar/styles';

const Dropdown = ({ cities }: { cities: string[] }) => {
	return (
		<StyledList>
			<li>
				<p>Cities</p>
				<ul>
					{cities.map((city) => {
						const country = getCountryName(city);
						return (
							<li key={city}>
								<Link href={`/city/${city}`}>
									<Image
										src={`https://flagsapi.com/${country}/flat/24.png`}
										alt={country}
										width={64}
										height={64}
									/>{' '}
									{city}
								</Link>
							</li>
						);
					})}
				</ul>
			</li>
		</StyledList>
	);
};

export default Dropdown;
