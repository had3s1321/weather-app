'use client';

import { styled } from 'styled-components';

export const StyledList = styled.ul`
	display: block;
	position: relative;
	width: 200px;

	li > a {
		color: black;
		display: block;
		text-align: center;
		text-decoration: none;
	}

	ul {
		background: #ddd;
		height: 0;
		left: 0;
		opacity: 0;
		position: absolute;
		transition: all 0.5s ease;
		top: 35px;
		width: 100%;
	}

	li:hover ul {
		height: 200px;
		opacity: 1;
		transform: translateY(0);
	}

	ul a {
		color: #000;
		display: block;
		padding: 5px 20px;
	}

	p {
		text-align: center;
	}

	p:hover {
		cursor: pointer !important;
	}
`;

interface StyledInputProps {
	$width: string;
}

export const StyledInput = styled.input<StyledInputProps>`
	width: ${(props) => props.$width};
	display: flex;
	height: 24px;
	align-items: center;
	width: 384px;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
	padding-left: 12px;
	margin-right: 200px;

	&:focus {
		outline: none;
	}

	&:focus::placeholder {
		color: transparent;
	}
`;

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
