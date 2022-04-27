import Document, {
	DocumentContext,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Fragment } from 'react';
import { RenderPageResult } from 'next/dist/shared/lib/utils';

declare type DocumentInitialProps = RenderPageResult & {
	styles?: React.ReactElement[] | React.ReactFragment;
};

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [
					<Fragment key="1">
						{initialProps.styles}
						{sheet.getStyleElement()}
					</Fragment>,
				],
			};
		} finally {
			sheet.seal();
		}
	}
}
