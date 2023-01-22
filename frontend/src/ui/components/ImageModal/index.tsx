import React from 'react';

import { ImageModalWrapper } from './index.styled';

export interface ImageModalProps {
	url: string;
}

const ImageModal = (props: ImageModalProps): JSX.Element => {
	const { url } = props;
	return (
		<ImageModalWrapper>
			<div>
				<img src={url} alt="" />
			</div>
		</ImageModalWrapper>
	);
};

export default ImageModal;
