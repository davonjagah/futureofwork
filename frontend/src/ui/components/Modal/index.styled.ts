import styled from 'styled-components';

export const ModalWrapper = styled.div<{
	bg?: string;
	height?: string;
	width?: string;
	top?: string;
	left?: string;
	display?: string;
}>`
	position: fixed;
	top: ${({ top }) => (top ? top : '0')};
	left: ${({ left }) => (left ? left : '0')};
	width: ${({ width }) => (width ? width : '100vw')};
	height: ${({ height }) => (height ? height : '100vh')};
	display: ${({ display }) => (display ? display : 'block')};
	align-items: center;
	justify-content: center;
	overflow: auto;
	background: ${({ bg }) => (bg ? bg : 'white')};
	padding: 1em;
`;

export const ModalCloseIcon = styled.div`
	z-index: 10;
	position: absolute;
	top: calc(1rem + (0.025 * 100vh));
	right: calc(1rem + (0.015 * 100vw));
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > * {
		display: flex;
	}

	& > svg {
		fill: white;
		height: 1.5rem;
		cursor: pointer;
		border-radius: 99px;

		&:hover {
			transform: scale(2.1);
		}
	}

	border: none;

	&:before {
		content: '';
		height: 2.5rem;
		width: 2.5rem;
		position: absolute;
		top: 50%;
		left: 50%;
		border-radius: 99rem;
		transform: translate(-50%, -50%);
	}
`;
