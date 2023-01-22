import { Buffer } from 'buffer';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<{
		styles: JSX.Element;
		html: string;
		head?: JSX.Element[];
	}> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				)
			};
		} finally {
			sheet.seal();
		}
	}
	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
						rel="stylesheet"></link>
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
						rel="stylesheet"></link>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<script dangerouslySetInnerHTML={{ __html: `window.Buffer = ${Buffer};` }}></script>
			</Html>
		);
	}
}
