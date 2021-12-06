import axios from "axios";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Content from "../components/layout/Content";
import Main from "../components/layout/Main";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Messages, Errored } from "../components/ui/Messages";

import styles from "../styles/join.module.scss";
import classes from "../styles/classes.module.scss";

import { useAuth } from "../context/user";

// set default API location for axios requests
axios.defaults.baseURL = process.env.BACKEND_URL;

function Join() {
	const auth = useAuth();

	const [userData, setUserData] = useState({ name: "", email: "", password: "" });
	const [message, setMessage] = useState({ error: null });

	async function handleSubmit(event) {
		event.preventDefault();
		setMessage({ error: null });
		if (!userData.name || !userData.email || !userData.password) {
			const errorMessage = "Please fill in all of the fields";
			return setMessage({ error: errorMessage });
		}
		try {
			await auth.signup(userData);
			Router.push("/");
		} catch (error) {
			setMessage({ error: error.message });
		}
	}

	return (
		<div>
			<Head>
				<title>Join &ndash; Calibir</title>
				<meta name="description" content="" />
			</Head>
			<Content>
				<Main>
					<div className="max-w-lg mx-auto rounded-lg lg:p-12 p-4 shadow-lg mt-24">
						<div className={styles.form}>
							<div className="flex items-center py-8">
								<img src="/images/logo.png" className="w-24 filter grayscale" />
								<h2 className="text-xl font-bold pl-4">Welcome to the community</h2>
							</div>
							<form onSubmit={handleSubmit}>
								<Input
									autofocus
									label="Name"
									type="text"
									autocomplete="name"
									onChange={(event) => setUserData({ ...userData, name: event.target.value })}
								/>
								<Input
									label="Email"
									type="email"
									autocomplete="email"
									onChange={(event) => setUserData({ ...userData, email: event.target.value })}
								/>
								<Input
									label="Password"
									type="password"
									autocomplete="password"
									onChange={(event) => setUserData({ ...userData, password: event.target.value })}
								/>
								<div className="text-sm py-2">
									<p>
										To <b>protect your account</b>, make sure your password:
									</p>
									<ul className="list-disc list-putside py-2 ml-4">
										<li className="">Is longer than 8 characters</li>
										<li>Contains at least one uppercase and one lowercase character</li>
										<li>Contains at least one special character</li>
									</ul>
								</div>
								<Messages>{message.error && <Errored message={message.error} />}</Messages>
								<Button>Join and continue</Button>
							</form>
							<div className="flex items-center py-2">
								<p>Already have an account?</p>
								<Link href="/login">
									<a className={`${classes.colored_link} px-1`}>Log in</a>
								</Link>
							</div>
						</div>
					</div>
				</Main>
				<Footer />
			</Content>
		</div>
	);
}

export default Join;
