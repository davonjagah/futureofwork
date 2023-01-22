import './main.css';

import { AppProps } from 'next/app';
import { MediaQueryProvider } from 'providers/MediaQueryProvider';
import { ModalProvider } from 'providers/ModalProvider';
import { WalletProvider } from 'providers/WalletProvider';
// import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/global';
import { theme } from '../styles/theme';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<WalletProvider>
					<MediaQueryProvider>
						<ModalProvider>
							<Component {...pageProps} />
						</ModalProvider>
					</MediaQueryProvider>
				</WalletProvider>
			</ThemeProvider>
		</>
	);
}
