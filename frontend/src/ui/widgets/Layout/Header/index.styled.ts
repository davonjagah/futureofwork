import styled from 'styled-components';
import { Container } from 'ui/atoms/Container';

export const HeaderWrapper = styled(Container)`
	padding-top: 55px;
	padding-bottom: 55px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		width: 166px;
		height: 44px;
		background: #00b9cb;
		border-radius: 5px;
		color: white;
		border: 0;
		cursor: pointer;
		padding: 12px 24px;
		overflow-x: hidden;
		text-overflow: ellipsis;
		&:hover {
			opacity: 0.9;
		}
	}
`;
