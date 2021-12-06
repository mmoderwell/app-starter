import { useAuth } from "../context/user";

import Blocked from "../components/Blocked";

export default function withAuthSync(Component, roles) {
	const Wrapper = (props) => {
		// Get auth state and re-render anytime it changes
		const auth = useAuth();
		if (roles.includes("admin") && auth.user && !auth.user.isAdmin)
			return <Blocked redirect={false} message={"Insufficient permissions to access page"} />;
		if (auth.user) return <Component {...props} />;
		return <Blocked redirect message={null} />;
	};

	if (Component.getInitialProps) {
		Wrapper.getInitialProps = Component.getInitialProps;
	}

	return Wrapper;
}
