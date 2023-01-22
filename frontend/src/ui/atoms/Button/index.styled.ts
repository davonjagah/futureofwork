import styled, { css } from 'styled-components';
import { color, layout, space, typography, variant } from 'styled-system';

interface ButtonProps {
	variant?:
		| 'solid'
		| 'outline'
		| 'link'
		| 'secondary'
		| 'interactiveSolid'
		| 'interactiveOutlined'
		| 'unstyled';
	fullWidth?: boolean;
	large?: boolean;
	rounded?: boolean;
}
export const Button = styled.button<ButtonProps>`
	${space}
	${layout}
  ${typography}
  ${color}
  cursor: pointer;
	line-height: 1;
	border: none;
	outline: none;
	box-shadow: none;
	border-radius: ${({ theme }) => theme.borderRadius.sm};
	font-size: ${({ theme }) => theme.fontSizes.md};
	padding: ${({ theme }) => `${theme.space['2']} ${theme.space['3']}`};

	&:disabled {
		pointer-events: none;
	}

	${({ theme }) => css`
		${variant({
			variants: {
				solid: {
					fontFamily: theme.fonts.primary,
					backgroundColor: theme.colors.lightBlue,
					color: theme.colors.white,

					'&:disabled': {
						backgroundColor: theme.colors.cottenSeed
					}
				},
				outline: {
					fontFamily: theme.fonts.primary,
					color: theme.colors.lightBlue,
					border: `1px solid ${theme.colors.lightBlue}`,
					backgroundColor: theme.colors.white,
					borderRadius: theme.borderRadius.base,
					lineHeight: 'shorter',

					'&:disabled': {
						color: theme.colors.gray,
						borderColor: theme.colors.gray
					}
				},
				link: {
					appearance: 'none',
					background: 'transparent',
					fontFamily: theme.fonts.primary,
					display: 'flex',
					alignItems: 'center',
					color: theme.colors.blue,
					padding: 0,
					textTransform: 'uppercase'
				},
				secondary: {
					fontFamily: theme.fonts.primary,
					backgroundColor: theme.colors.orange,
					color: theme.colors.black
				},
				interactiveSolid: {
					background: 'transparent',
					color: theme.colors.white,
					border: '2px solid',
					borderColor: theme.colors.lightBlue,
					padding: `${theme.space['2.5']} ${theme.space['5']}`,
					transition: `border 0.125s ease, background 0.125s ease`
				},
				interactiveOutlined: {
					background: 'transparent',
					color: theme.colors.white,
					border: '2px solid',
					borderColor: theme.colors.whitish,
					padding: `${theme.space['2.5']} ${theme.space['5']}`,
					transition: `border 0.125s ease, background 0.125s ease`
				},
				unstyled: {
					background: 'transparent'
				}
			}
		})}

		&:hover {
			${variant({
				variants: {
					outline: {},
					interactiveSolid: { backgroundColor: theme.colors.lightBlue },
					interactiveOutlined: { borderColor: theme.colors.white }
				}
			})}
		}
	`};

	${({ fullWidth }) => fullWidth && `width: 100%`};
	${({ large }) => large && `min-height: 40px`};
	${({ rounded, theme }) => rounded && `border-radius: ${theme.borderRadius.full}`};
`;
