import { CSSProperties } from 'react';
import styled, { css, DefaultTheme } from 'styled-components';

interface DividerProps {
	color?: keyof Pick<DefaultTheme['colors'], 'cottenSeed' | 'white'>;
	transparent?: boolean;
	margin?: CSSProperties['margin'];
	orientation?: 'horizontal' | 'vertical';
	height?: CSSProperties['height'];
	width?: CSSProperties['width'];
	display?: 'inline-block' | 'block';
}

const horizontal = css<DividerProps>`
	height: ${({ height }) => (height === undefined ? '1px' : height)};
	width: ${({ width }) => (width === undefined ? '100%' : width)};
`;

const vertical = css<DividerProps>`
	height: ${({ height }) => (height === undefined ? '100%' : height)};
	width: ${({ width }) => (width === undefined ? '1px' : width)};
`;

const Divider = styled.hr<DividerProps>`
	border: none;
	display: ${({ display }) => (display ? display : 'block')};
	background: ${({ theme, color, transparent }) => {
		if (transparent) return 'transparent';
		else return theme.colors[color] || theme.colors.shuttleGray;
	}};
	margin: ${({ margin }) => (margin === undefined ? 0 : margin)};
	${({ orientation }) => (orientation === 'vertical' ? vertical : horizontal)}
`;

Divider.displayName = 'Divider';

export { Divider };
