import "../styles/globals.css";
import "animate.css";

import { ProvideAuth } from "../context/user";

function MyApp({ Component, pageProps }) {
	return (
		<ProvideAuth>
			<Component {...pageProps} />
		</ProvideAuth>
	);
}

export default MyApp;
