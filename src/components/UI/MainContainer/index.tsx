import React from 'react';
import { StyledMainContainer } from '@/components/UI/MainContainer/styles';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default MainContainer;
