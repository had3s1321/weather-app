import Link from 'next/link';
import ThemeToggler from '@/components/ThemeToggler';

const NavBar = () => {
	return (
		<nav
			style={{
				width: '100%',
				height: '80px',
				backgroundColor: 'blue'
			}}
		>
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
		</nav>
	);
};

export default NavBar;
