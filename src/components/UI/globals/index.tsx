'use client';

import { styled, css } from 'styled-components';

interface CardProps {
	width?: string;
	height?: string;
	outer?: string;
	marginBottom?: string;
	image?: boolean;
	borderless?: boolean;
}

export const Card = styled.div<CardProps>`
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	padding: ${(props) => props.outer || '28px'};
	margin-bottom: ${(props) => props.marginBottom};
	${(props) =>
		props.image &&
		css`
			position: relative;
			overflow: hidden;
			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		`}
	border: ${(props) => props.borderless && 'none'};
	${(props) =>
		!props.borderless &&
		css`
			box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
		`};
`;

interface FlexProps {
	align?: 'stretch' | 'center' | 'start' | 'end';
	justify?:
		| 'start'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	column?: boolean;
	gap?: string;
	delimiter?: boolean;
	height?: string;
	width?: string;
	maxWidth?: string;
}

export const Flex = styled.div<FlexProps>`
	display: flex;
	align-items: ${(props) => props.align};
	justify-content: ${(props) => props.justify};
	flex-direction: ${(props) => (props.column ? 'column' : 'row')};
	gap: ${(props) => props.gap};
	position: ${(props) => (props.delimiter ? 'relative' : 'static')};
	height: ${(props) => props.height};
	width: ${(props) => props.width};
	max-width: ${(props) => props.maxWidth};
	${(props) =>
		props.delimiter &&
		css<FlexProps>`
			&:not(:first-child)::before {
				content: '';
				position: absolute;
				margin: auto;
				${(props) =>
					props.column
						? css`
								top: 0;
								bottom: 0;
								left: -50%;
								width: 1px;
								height: 90%;
								background-color: lightgrey;
							`
						: css`
								left: 0;
								right: 0;
								top: -25%;
								width: 90%;
								height: 1px;
								background-color: lightgrey;
							`}
			}
		`}
`;

interface TextProps {
	size?: string;
	weight?: string;
	align?: 'start' | 'end' | 'center' | 'justify';
	width?: string;
	height?: string;
	isClickable?: boolean;
	marginBlock?: string;
}

export const Text = styled.p<TextProps>`
	font-size: ${(props) => props.size};
	font-weight: ${(props) => props.weight};
	text-align: ${(props) => props.align};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	${(props) =>
		props.isClickable &&
		css`
			&:hover {
				cursor: pointer !important;
			}
		`}
	margin-block: ${(props) => props.marginBlock};
`;

interface SpanProps {
	weight?: string;
}

export const Span = styled.span<SpanProps>`
	font-weight: ${(props) => props.weight};
`;

export const Title = styled.h1`
	font-size: 40px;
	font-weight: 500;
`;
