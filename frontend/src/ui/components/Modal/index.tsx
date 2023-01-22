import React, { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from 'ui/atoms/Portal';
import { CloseIcon } from 'ui/svgs/CloseIcon';

import { ModalCloseIcon, ModalWrapper } from './index.styled';

export interface ModalProps {
	children: ReactNode;
	modalId?: string;
	overlayBg?: string;
	closeButton?: boolean;
	width?: string;
	height?: string;
	top?: string;
	left?: string;
	display?: string;
	closeButtonIcon?: ReactNode;
	onMount?: () => void;
	onUnmount?: () => void;
	onEscKey?: () => void;
	onCloseIcon?: () => void;
	onOverlay?: () => void;
}

export const Modal = (props: ModalProps): JSX.Element => {
	const {
		children,
		modalId = 'modal-root',
		overlayBg = 'transparent',
		closeButton = false,
		onMount,
		onUnmount,
		onEscKey,
		width = '100vw',
		height = '100vh',
		top,
		left,
		onCloseIcon,
		onOverlay,
		closeButtonIcon,
		display
	} = props;

	const closeModalOnEscapeKey = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Esc' || e.key === 'Escape') {
				onEscKey && onEscKey();
			}
		},
		[onEscKey]
	);

	useEffect(() => {
		onMount && onMount();
		return () => {
			onUnmount && onUnmount();
		};
	}, [onMount, onUnmount]);

	useEffect(() => {
		if (onEscKey) {
			document.addEventListener('keydown', closeModalOnEscapeKey);
		}
		return () => {
			document.removeEventListener('keydown', closeModalOnEscapeKey);
		};
	}, [closeModalOnEscapeKey, onEscKey]);

	return (
		<Portal zIndex={1400} id={modalId}>
			<ModalWrapper
				onClick={onOverlay}
				bg={overlayBg}
				width={width}
				height={height}
				top={top}
				left={left}
				role="dialog"
				display={display}
				aria-modal="true">
				{closeButton && (
					<ModalCloseIcon
						onClick={(e) => {
							e.stopPropagation();
							onCloseIcon && onCloseIcon();
						}}>
						{closeButtonIcon ? closeButtonIcon : <CloseIcon color="#000" />}
					</ModalCloseIcon>
				)}
				{children}
			</ModalWrapper>
		</Portal>
	);
};
