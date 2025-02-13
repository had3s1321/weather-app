import { WeatherProvider } from '@/data/contexts/weatherContext';
import StyledComponentsRegistry from '@/registry';
import { ThemeProvider } from '@/data/contexts/themeContext';
import GlobalStyle from '@/app/styles/GlobalStyle';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<StyledComponentsRegistry>
			<ThemeProvider>
				<WeatherProvider>
					<GlobalStyle />
					{children}
				</WeatherProvider>
			</ThemeProvider>
		</StyledComponentsRegistry>
	);
};

export default Providers;
