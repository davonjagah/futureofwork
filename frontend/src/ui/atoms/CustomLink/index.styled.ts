import styled from 'styled-components';

export const LinkWrapper = styled.span<{ active: boolean }>`
	a {
		display: inline-block;
		text-transform: capitalize;
		padding: 1.2em 0.8em;
		font-weight: 500;
		border-bottom: 3px solid ${({ active }) => (active ? 'green' : 'white')} !important;
	}
`;
