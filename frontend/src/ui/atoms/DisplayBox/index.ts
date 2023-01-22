import styled from 'styled-components';

export const DisplayBox = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-column-gap: ${({ theme }) => theme.space[4]};
	grid-row-gap: ${({ theme }) => theme.space[8]};
	justify-content: space-between;
`;
