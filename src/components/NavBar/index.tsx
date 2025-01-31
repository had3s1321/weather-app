import Link from 'next/link';
import ThemeToggler from '@/components/NavBar/ThemeToggler';
import { StyledNavigation } from './styles';
import SearchBar from './SearchBar';
import Dropdown from './Dropdown';

const NavBar = () => {
	return (
		<StyledNavigation>
			<Link href='/' style={{ color: 'black' }}>
				Home
			</Link>
			<SearchBar />
			<Dropdown />
			<ThemeToggler />
		</StyledNavigation>
	);
};

export default NavBar;
