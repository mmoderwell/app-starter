import styles from "../components/ui/Breadcrumbs.module.scss";
import Link from "next/link";

export default function Breadcrumbs({ base, current }) {
	return (
		<div className={styles.breadcrumbs}>
			<Link href={base.url}>
				<a className={styles.link}>{base.name}</a>
			</Link>{" "}
			| {current}
		</div>
	);
}
