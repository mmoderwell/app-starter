import styles from "../components/ui/Checkbox.module.scss";

const Checkbox = ({ onClick, checked, disabled, label, color, children }) => (
	<label className={styles.agreement}>
		{children || label}
		<input type="checkbox" checked={checked} disabled={disabled} onChange={onClick} />
		<span className={color === "secondary" ? styles.alternate : styles.checkmark}></span>
	</label>
);

export default Checkbox;
