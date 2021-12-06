import Cookies from "js-cookie";
import axios from "axios";

import React, { useState, useEffect, useContext, createContext } from "react";
import Router from "next/router";

// set default API location for axios requests
axios.defaults.baseURL = process.env.BACKEND_URL;

const authContext = createContext();

// Hook for child components to get the auth object and re-render when it changes.
export const useAuth = () => {
	return useContext(authContext);
};

// Provider hook that creates auth object and handles state
function useProvideAuth() {
	const [user, setUser] = useState(null);

	const signin = async (email, password) => {
		const { data } = await axios.post("/api/users/login", { email, password });
		if (!data.auth) throw Error(data.message);
		setUser(data.user);
		Cookies.set("nnn", data.token, { secure: process.env.NODE_ENV === "production" });
	};
	const getUser = async (token) => {
		const { data } = await axios.post(
			"/api/users/authenticated/me",
			{},
			{ headers: { Authorization: `Bearer ${token}` } }
		);
		if (data.auth) setUser(data.user);
	};
	const signup = async (user) => {
		console.log("backend", process.env.BACKEND_URL);
		const { data } = await axios.post("/api/users/join", user);
		if (!data.auth || !data.success) throw Error(data.message);
		setUser(data.user);
		Cookies.set("nnn", data.token, { secure: process.env.NODE_ENV === "production" });
	};

	const signout = async () => {
		setUser(null);
		Cookies.remove("nnn");
		Router.push("/login");
	};

	// Subscribe to user on mount
	useEffect(() => {
		const token = Cookies.get("nnn");
		if (token) getUser(token);
	}, []);

	// Return the user object and auth methods
	return {
		user,
		signin,
		getUser,
		signup,
		signout,
	};
}

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
