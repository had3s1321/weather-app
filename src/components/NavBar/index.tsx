import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';
import { StyledNavigation } from './styles';

const NavBar = () => {
	return (
		<StyledNavigation>
			<Link href='/' style={{ color: 'black' }}>
				Home
			</Link>
			<Link href='/London' style={{ color: 'black' }}>
				London
			</Link>
			<Link href='/Paris' style={{ color: 'black' }}>
				Paris
			</Link>
			<ThemeToggler />
		</StyledNavigation>
	);
};

export default NavBar;
