import styled from 'styled-components';
import { Typography } from 'ui/atoms/Typography';

export const Input = styled.input<{ hasError?: boolean }>`
	margin-top: 0.4em;
	display: block;
	border: 0;
	border-radius: 20px;
	background: #f4f4f4;
	height: 40px;
	padding-left: 1.5em;
	width: 100%;

	&::placeholder {
		color: darkgray;
	}

	&:focus {
		box-shadow: none;
		outline: 0;
	}
`;

export const Error = styled(Typography)`
	margin-left: 1.5em;
`;
