import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { GlobalStyles } from '../components/styles/components/Global.styled';
import { Provider } from 'react-redux';
import { store } from '../state/store/store';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<Provider store={store}>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="favicons/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="favicons/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="favicons/favicon-16x16.png"
					/>
					<link rel="manifest" href="favicons/site.webmanifest" />
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff"></meta>
					<meta name="description" content="Audiophile" />
				</Head>
				<GlobalStyles />
				<Header />
				<Component {...pageProps} />
				<Footer />
			</Provider>
		</>
	);
};

export default MyApp;
