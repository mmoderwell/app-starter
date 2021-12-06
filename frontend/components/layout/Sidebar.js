import { Tab, TabList } from "react-tabs";
import classNames from "classnames";
import {
	CogIcon,
	FilmIcon,
	CollectionIcon,
	LibraryIcon,
	DocumentAddIcon,
	CurrencyDollarIcon,
} from "@heroicons/react/solid";

import { XCircleIcon } from "@heroicons/react/outline";

import { useAuth } from "../../context/user";

import styles from "./Sidebar.module.scss";

const icons = {
	currency: CurrencyDollarIcon,
	collection: CollectionIcon,
	document: DocumentAddIcon,
	library: LibraryIcon,
	film: FilmIcon,
	cog: CogIcon,
};

function SidebarItem({ icon, name, ...props }) {
	const ListIcon = icons[icon];
	return (
		<Tab {...props} className={styles.tab}>
			<a
				className={classNames([
					"flex",
					"items-center",
					"px-4",
					"py-2",
					"text-gray-600",
					"dark:text-gray-400",
					"hover:text-gray-700",
					"dark:hover:text-gray-200",
				])}
				href="#"
			>
				<ListIcon
					className={classNames(["flex-shrink-0", "h-5", "w-5", "text-white-400"])}
					aria-hidden="true"
				/>
				<span className="mx-4 font-medium">{name}</span>
			</a>
		</Tab>
	);
}

function Sidebar({ open, toggleSidebar, children, ...props }) {
	const auth = useAuth();

	return (
		<div
			className={classNames([
				styles.sidebar,
				"transform",
				"transition-transform",
				{ "-translate-x-full": !open },
				"w-80vw",
				"md:w-20vw",
				"fixed",
				"min-h-screen",
				"bg-white",
				"dark:bg-gray-900",
				"border-r",
				"border-gray-300",
				"z-10",
			])}
		>
			<div className={styles.content}>
				<div className={classNames(["flex", "justify-end", "py-6", "px-6"])}>
					<button
						onClick={toggleSidebar}
						type="button"
						className={classNames([
							"p-2",
							"border",
							"border-transparent",
							"rounded-full",
							"text-gray-700",
							"dark:text-gray-100",
							"focus:outline-none",
							"focus:ring-1",
							// "focus:ring-offset-1",
							"focus:ring-gray-700",
						])}
					>
						<XCircleIcon className="h-7 w-7" aria-hidden="true" />
					</button>
				</div>
				<div className="flex flex-col items-left mx-6">
					<img
						className="object-cover w-24 h-24 mx-2 rounded-full"
						src="https://www.larvalabs.com/cryptopunks/cryptopunk8857.png"
						alt="avatar"
					/>
					<h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
						{auth.user && auth.user.name}
					</h4>
					<p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
						{auth.user && auth.user.email}
					</p>
				</div>
				<div className="flex flex-col justify-between flex-1 mt-6">
					<TabList className={styles.items} {...props}>
						{children}
					</TabList>
				</div>
			</div>
			{/* More sidebar content */}
		</div>
	);
}

Sidebar.tabsRole = "TabList";

export { Sidebar, SidebarItem };
