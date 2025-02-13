import Link from 'next/link';
import Dropdown from '@/components/NavBar/Dropdown';
import SearchBar from '@/components/NavBar/SearchBar';
import ThemeToggler from '@/components/NavBar/ThemeToggler';
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
			<ThemeToggler />
		</StyledNavigation>
	);
};

export default NavBar;
