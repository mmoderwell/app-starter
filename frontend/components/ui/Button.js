import Link from "next/link";

import styles from "./Button.module.scss";

export default function Button({ width, onSubmit, children }) {
	return (
		<button type="submit" style={{ maxWidth: width }} className={styles.button} onClick={onSubmit}>
			{children}
		</button>
	);
}

export function Add({ onSubmit, children, href }) {
	return (
		<Link href={href}>
			<div className={styles.add} onClick={onSubmit}>
				{children}
				<div className={styles.plus}>+</div>
			</div>
		</Link>
	);
}

export function Save({ onSubmit, children, href, style }) {
	return (
		<div className={styles.save} onClick={onSubmit} style={style}>
			Save
		</div>
	);
}
