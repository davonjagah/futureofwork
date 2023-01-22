import styled from 'styled-components';

export const ImageModalWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	margin: auto;

	div {
		width: 80%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			object-fit: contain;
			display: block;
			max-width: 100%;
			max-height: 100%;
		}
	}
`;
