'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import Link from 'next/link';
import Image from 'next/image';
import { StyledList } from '@/components/NavBar/styles';

const Dropdown = () => {
	const [cities, setCities] = useLocalStorage<string[]>('CITIES_STORAGE', []);

	return (
		<StyledList>
			<li>
				<p>Cities</p>
				<ul>
					{cities.map((city) => (
						<li key={city}>
							<Link href={`/city/${city}`}>
								<Image src='' alt='' /> {city}
								<button onClick={() => setCities(['Paris, London'])}></button>
							</Link>
						</li>
					))}
				</ul>
			</li>
		</StyledList>
	);
};

export default Dropdown;
