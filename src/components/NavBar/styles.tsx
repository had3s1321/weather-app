'use client';

import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
	width: 1280px;
	margin-bottom: var(--gap-m);
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline-start: 28px;
	margin-bottom: 24px;
	width: 100%;
	height: calc(100vh / 20);
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

	p {
		color: var(--clr-dark);
	}

	a {
		text-decoration: none;
		color: var(--clr-dark);
	}

	img {
		vertical-align: middle;
	}
`;
