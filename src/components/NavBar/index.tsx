import Link from 'next/link';
import ThemeToggler from '@/components/NavBar/ThemeToggler';
import { StyledNavigation } from './styles';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';
import CurrentLocation from './CurrentLocation';

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
