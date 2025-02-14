import type { Metadata } from 'next';
import MainContainer from '@/components/UI/MainContainer/index';
import StyledComponentsRegistry from '@/registry';

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
					<MainContainer>{children}</MainContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
