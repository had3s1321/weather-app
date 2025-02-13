import type { Metadata } from 'next';
import MainContainer from '@/components/UI/MainContainer/index';
import Providers from '@/components/Providers/Providers';

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
				<Providers>
					<MainContainer>{children}</MainContainer>
				</Providers>
			</body>
		</html>
	);
}
