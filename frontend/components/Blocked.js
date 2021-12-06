import Router from "next/router";
import { useEffect } from "react";

import Content from "../components/layout/Content";

import styles from "./Blocked.module.scss";

export default function Blocked({ redirect, message }) {
	useEffect(() => {
		if (redirect) {
			const timer = setTimeout(() => {
				Router.push("/login");
			}, 4000);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<Content>
			<h3 className={styles.heading}>{message}</h3>
			<div className={styles.container}>
				<img src="/images/logo.png" />
			</div>
		</Content>
	);
}
