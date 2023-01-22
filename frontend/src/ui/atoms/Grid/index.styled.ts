import styled from 'styled-components';

const autoRows = ({ minRowHeight = '20px' }) => `minmax(${minRowHeight}, auto)`;

const frGetter = (value) => (typeof value === 'number' ? `repeat(${value}, 1fr)` : value);

const gap = ({ gap = '8px' }) => gap;

const flow = ({ flow = 'row' }) => flow;

const formatAreas = (areas) => areas.map((area) => `"${area}"`).join(' ');

export interface GridProps {
	className?: string;
	columns?: string | number;
	gap?: string;
	columnGap?: string;
	rowGap?: string;
	height?: string;
	minRowHeight?: string;
	flow?: string;
	rows?: string | number;
	areas?: string[];
	justifyContent?: string;
	alignContent?: string;
}

export interface CellProps {
	className?: string;
	width?: number;
	height?: number;
	top?: string | number;
	left?: string | number;
	middle?: boolean;
	center?: boolean;
	area?: string;
}

export const Grid = styled.div<GridProps>`
	display: grid;
	height: ${({ height = 'auto' }) => height};
	grid-auto-flow: ${flow};
	grid-auto-rows: ${autoRows};
	${({ rows }) => rows && `grid-template-rows: ${frGetter(rows)}`};
	grid-template-columns: ${({ columns = 12 }) => frGetter(columns)};
	grid-gap: ${gap};
	${({ columnGap }) => columnGap && `column-gap: ${columnGap}`};
	${({ rowGap }) => rowGap && `row-gap: ${rowGap}`};
	${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
	${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`};
	${({ alignContent }) => alignContent && `align-content: ${alignContent}`};
`;

export const Cell = styled.div<CellProps>`
	height: 100%;
	min-width: 0;
	grid-column-end: ${({ width = 1 }) => `span ${width}`};
	grid-row-end: ${({ height = 1 }) => `span ${height}`};
	${({ left }) => left && `grid-column-start: ${left}`};
	${({ top }) => top && `grid-row-start: ${top}`};
	${({ center }) => center && `text-align: center`};
	${({ area }) => area && `grid-area: ${area}`};
	${
		/* prettier-ignore */
		({ middle }) => middle && `
      display: inline-flex;
      flex-flow: column wrap;
      justify-content: center;
      justify-self: stretch;
  `
	};
`;
