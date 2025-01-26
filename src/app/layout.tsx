import type { Metadata } from 'next';
import Link from 'next/link';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from '@/lib/contexts/themeContext';
import ThemeToggler from '@/components/ThemeToggler';

export const metadata: Metadata = {
	title: 'Weather App',
	description: 'Get information about the weather'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				<StyledComponentsRegistry>
					<ThemeProvider>
						<GlobalStyle />
						<div
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
						</div>
						{children}
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
