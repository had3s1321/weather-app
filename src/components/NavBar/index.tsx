import Link from 'next/link';
import CityMenu from '@/components/NavBar/CityMenu';
import CurrentLocation from '@/components/NavBar/CurrentLocation';
import { StyledNavigation } from '@/components/NavBar/styles';

const NavBar = () => {
	return (
		<StyledNavigation>
			<Link href='/' style={{ color: 'black' }}>
				Home
			</Link>
			<CurrentLocation />
			<CityMenu />
		</StyledNavigation>
	);
};

export default NavBar;
