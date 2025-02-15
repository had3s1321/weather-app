import Link from 'next/link';
import Dropdown from '@/components/NavBar/Dropdown';
import SearchBar from '@/components/NavBar/SearchBar';
import CurrentLocation from '@/components/NavBar/CurrentLocation';
import { StyledNavigation } from '@/components/NavBar/styles';

const NavBar = () => {
	return (
		<StyledNavigation>
			<Link href='/' style={{ color: 'black' }}>
				Home
			</Link>
			<SearchBar />
			<CurrentLocation />
			<Dropdown />
		</StyledNavigation>
	);
};

export default NavBar;
