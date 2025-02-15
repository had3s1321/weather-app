import type { Metadata } from 'next';
import MainContainer from '@/components/UI/MainContainer/index';
import StyledComponentsRegistry from '@/registry';
import GlobalStyle from './styles/GlobalStyle';

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
					<MainContainer>{children}</MainContainer>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
