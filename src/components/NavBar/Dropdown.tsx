'use client';

import Link from 'next/link';
import Image from 'next/image';
import { StyledList } from '@/components/NavBar/styles';

const Dropdown = ({ cities }: { cities: string[] }) => {
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
