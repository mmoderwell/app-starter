import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";
import Input from "../components/ui/Input";
import Main from "../components/layout/Main";
import Button from "../components/ui/Button";
import { Messages, Errored } from "../components/ui/Messages";

import { useAuth } from "../context/user";

import styles from "../styles/login.module.scss";
import classes from "../styles/classes.module.scss";

// set default API location for axios requests
axios.defaults.baseURL = process.env.BACKEND_URL;

export default function Login() {
	const auth = useAuth();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		error: null,
	});

	async function handleSubmit(event) {
		event.preventDefault();

		setUserData({ ...userData, error: null });
		const { email, password } = userData;

		if (!email || !password) {
			const errorMessage = "Please fill in all of the fields";
			setUserData({ ...userData, error: errorMessage });
			return;
		}

		try {
			await auth.signin(email, password);
			Router.push("/");
		} catch (error) {
			setUserData({ ...userData, error: error.message });
		}
	}

	return (
		<div>
			<Head>
				<title>Login &ndash; Calibir</title>
				<meta name="description" content="" />

				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Content>
				<Main>
					<div className="max-w-lg mx-auto rounded-lg lg:p-12 p-4 shadow-lg mt-24">
						<div className={styles.login}>
							<div className="flex items-center py-8">
								<img src="/images/logo.png" className="w-24 filter grayscale" />
								<h2 className="text-xl font-bold pl-4">Sign in to your account</h2>
							</div>
							<form onSubmit={handleSubmit}>
								<Input
									autofocus
									label="Email"
									type="text"
									autocomplete="email"
									value={userData.email}
									onChange={(event) =>
										setUserData({
											...userData,
											email: event.target.value,
											success: null,
											error: null,
										})
									}
								/>
								<Input
									label="Password"
									type="password"
									autocomplete="password"
									value={userData.password}
									onChange={(event) =>
										setUserData({
											...userData,
											password: event.target.value,
											success: null,
											error: null,
										})
									}
								/>
								<Messages>{userData.error && <Errored message={userData.error} />}</Messages>
								<Button>Log in</Button>
							</form>
							<div className={styles.redirect}>
								<p className="py-2">
									Don't have an account?{" "}
									<Link href="/join">
										<a className={classes.colored_link} title="Sign up">
											Sign up
										</a>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</Main>
				<Footer />
			</Content>
		</div>
	);
}
