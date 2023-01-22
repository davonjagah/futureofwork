import styled from 'styled-components';
import { Container } from 'ui/atoms/Container';

export const HeaderWrapper = styled.div`
	background-color: white;
	border-bottom: 0.5px solid #f4f4f4;
	box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.03);
`;
export const InnerWrapper = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const LogoColumn = styled.div`
	/** assigning a width in order to push the first nav LinkWrapper to right so it aligns with the page title vertically  */
	width: 300px;
`;
export const NavColumn = styled.div<{ open: boolean }>`
	flex: 2;
	justify-self: flex-start;
	height: 100%;
	ul {
		display: flex;
		align-items: center;
		height: 100%;
		li {
			margin-right: 3em;
			a {
				display: inline-block;
				padding: 1rem;
				font-weight: 500;
				border-bottom: 3px solid white;
			}
			a:hover {
				border-bottom: 3px solid green;
			}
		}
	}
	@media (max-width: 768.98px) {
		height: auto;
		flex: 0;
		ul {
			height: auto;
			position: fixed;
			left: ${({ open }) => (open ? '0' : '-100%')};
			top: 60px;
			flex-direction: column;
			background-color: #fff;
			width: 100%;
			border-radius: 10px;
			text-align: center;
			z-index: 1000;
			transition: 0.3s;
			box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
			li {
				margin: 0.5em 0;
			}
		}
	}
`;

export const Hamburger = styled.div<{ open: boolean }>`
	display: none;
	padding: 1.2em 0;
	span {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;
		transition: all 0.3s ease-in-out;
		background-color: #101010;
	}
	@media (max-width: 768.98px) {
		display: block;
		span:nth-child(2) {
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		span:nth-child(1) {
			transform: ${({ open }) => (open ? 'translateY(8px) rotate(45deg)' : 'none')};
		}
		span:nth-child(3) {
			transform: ${({ open }) => (open ? 'translateY(-8px) rotate(-45deg)' : 0)};
		}
	}
`;
