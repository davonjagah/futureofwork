import styled from 'styled-components';
import { Container } from 'ui/atoms/Container';

export const LayoutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const Main = styled(Container)`
	flex: 1 0 auto;
	margin: auto;
	margin-top: 4em;
	/* trying to avoid "%" based container width in order to have a pixel perfect left/right spacing. Use padding/margin if need less width. */
	/* width: 95%; */
	@media (max-width: 576.98px) {
		margin-top: 5em;
	}
`;

export const Footer = styled.footer`
	flex-shrink: none;
`;

export const HeaderContainer = styled.header`
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 1050;
`;

export const CategoryColumn = styled.div`
	width: 300px;
	position: relative;
	@media (max-width: 768.98px) {
		display: none;
	}
`;

export const PageContent = styled.div`
	margin-left: 300px;
	@media (max-width: 768.98px) {
		margin-left: 0;
		margin-top: 147px;
	}

	${({ theme }) => theme.media.down(theme.breakpoints[0])`
    margin-top: 130px;
  `};
`;
