import styles from "./Main.module.scss";

export default function Main({ children, centered, wide }) {
	if (centered) return <div className={styles.centered}>{children}</div>;
	if (wide) return <div className={styles.wide}>{children}</div>;
	return <div className={styles.main}>{children}</div>;
}
