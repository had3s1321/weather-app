import type { Metadata } from 'next';
import Link from 'next/link';
import GlobalStyle from './styles/GlobalStyle';
import StyledComponentsRegistry from '@/lib/registry';

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
					</div>
					{children}
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
