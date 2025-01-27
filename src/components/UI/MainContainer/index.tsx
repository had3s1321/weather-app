import React from 'react';
import { Container } from './styles';

const MainContainer = ({ children }: { children: React.ReactNode }) => {
	return <Container>{children}</Container>;
};

export default MainContainer;
