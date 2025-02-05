import React from 'react';
import { StyledMainContainer } from '@/components/UI/MainContainer/styles';
import NavBar from '@/components/NavBar/index';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<StyledMainContainer>
			<NavBar />
			{children}
		</StyledMainContainer>
	);
};

export default MainContainer;
