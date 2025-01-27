import type { Metadata } from 'next';
import NavBar from '@/components/NavBar/NavBar';
import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from '@/lib/contexts/themeContext';
import { WeatherProvider } from '@/lib/contexts/weatherContext';
import GlobalStyle from './styles/GlobalStyle';
import MainContainer from '@/components/UI/MainContainer';

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
						<WeatherProvider>
							<GlobalStyle />
							<NavBar />
							<MainContainer>{children}</MainContainer>
						</WeatherProvider>
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	);
}
