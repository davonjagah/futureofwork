import styled, { css, keyframes } from 'styled-components';

import { BackdropProps } from './interface';

const backdropAppear = keyframes`
  from { 
    visibility: hidden;
  }  

  to {     
    visibility: visible;
  }
`;

const backdropDisappear = keyframes`
  from { 
    visibility: visible;
  }  
  
  to { 
    visibility: hidden;    
  }
`;

const appear = css<BackdropProps>`
	animation: ${backdropAppear} ${({ transitionDuration = 300 }) => transitionDuration}ms forwards;
	animation-timing-function: ${({ theme }) => theme.transitions.easing.easeOut};
`;

const disappear = css<BackdropProps>`
	animation: ${backdropDisappear} ${({ transitionDuration = 300 }) => transitionDuration}ms forwards;
	animation-timing-function: ${({ theme }) => theme.transitions.easing.easeOut};
`;

const visibleStyle = css<BackdropProps>`
	transform: scale(1);
`;

const invisibleStyle = css<BackdropProps>`
	transform: scale(0);
`;

export const Backdrop = styled.div<BackdropProps>`
	box-sizing: border-box;
	z-index: ${({ theme, zIndex }) => (zIndex === undefined ? theme.zIndices.overlay : zIndex)};
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	height: 100vh;
	width: 100vw;
	background: #00000077;
	${({ open }) => (open ? appear : disappear)};

	${({ open }) => (open ? visibleStyle : invisibleStyle)};
	transition: all ${({ transitionDuration = 300 }) => transitionDuration}ms;
	transition-timing-function: ${({ theme }) => theme.transitions.easing.easeOut};
`;
