import styles from "./Accented.module.scss";

export default function Accented({ children }) {
	return <div className={styles.accented}>{children}</div>;
}
