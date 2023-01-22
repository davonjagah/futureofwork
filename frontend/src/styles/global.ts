/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: inherit;
  }

  html, 
  body {
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
  }
  body::-webkit-scrollbar {
  width: 0.3em;
  /* display: none; */
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: #C11E22;
}

@font-face {
  font-family: 'galanoBold';
  src: url('/resources/GalanoGrotesque-Bold.ttf');
}
@font-face {
  font-family: 'galano-extra-bold';
  src: url('/resources/fonts/GalanoGrotesque-ExtraBold.ttf');
}
@font-face {
  font-family: 'galanoExtraLight';
  src: url('/resources/fonts/GalanoGrotesque-ExtraLight.ttf');
}
@font-face {
  font-family: 'galanoHeavy';
  src: url('/resources/fonts/GalanoGrotesque-Heavy.ttf');
}
@font-face {
  font-family: 'galanoLight';
  src: url('/resources/fonts/GalanoGrotesque-Light.ttf');
}
@font-face {
  font-family: 'galanoMedium';
  src: url('/resources/fonts/GalanoGrotesque-Medium.ttf');
}
@font-face {
  font-family: 'galanoSemiBold';
  src: url('/resources/fonts/GalanoGrotesque-SemiBold.ttf');
}
  
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    display:flex; 
    flex-direction:column;
    overflow-x: hidden;
    /* background: ${({ theme }) => theme.colors.nero}; */
    color: ${({ theme }) => theme.colors.nero};
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  /* since next js adds a wrapper div inside body tag, give it 
  a 100% height so the children can have 100% height if needed. */
  #__next {
    height: 100%;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
`;
