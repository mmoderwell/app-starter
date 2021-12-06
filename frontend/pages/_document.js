import Document, { Html, Head, Main, NextScript } from "next/document";

export default class extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<meta name="msapplication-TileColor" content="#da532c" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
