import styled, { css } from 'styled-components';

import { InputProps } from './interface';

const Secondary = css`
	height: 48px;
	box-shadow: none;
	border-radius: ${({ theme }) => theme.borderRadius.base};
	background-color: ${({ theme }) => theme.colors.lightGeyser};
`;

export const Input = styled.input<InputProps>`
	display: block;
	width: 100%;
	height: 40px;
	outline: none;
	border: none;
	font-size: 1rem;
	box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.grayish};
	padding-right: ${({ theme }) => theme.space[3]};
	padding-left: ${({ theme }) => theme.space[3]};
	border-radius: ${({ theme }) => theme.borderRadius.sm};
	color: ${({ theme }) => theme.colors.merlin};

	${({ variant }) => variant === 'secondary' && Secondary};
`;

export const InputErrorMessage = styled.div`
	margin-top: ${({ theme }) => theme.space['2']};
`;

interface LabelProps {
	variant?: InputProps['variant'];
}

export const Label = styled.label<LabelProps>`
	display: block;
	font-weight: bold;
	margin-bottom: ${({ theme }) => theme.space[2]};
`;
interface InputWrapperProps {
	width?: string;
}

export const InputWrapper = styled.div<InputWrapperProps>`
	width: ${({ width }) => (width ? width : 'auto')};
`;

export const InnerWrapper = styled.div`
	position: relative;
`;

export const PasswordButton = styled.button`
	background: none;
	border: none;
	position: absolute;
	top: 50%;
	right: ${({ theme }) => theme.space['2']};
	transform: translateY(-50%);
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: inherit;

	&:hover {
		background: none;
		border: none;
	}

	&:focus {
		background: none;
		border: none;
		outline: none;
	}
`;
