import axios from "axios";
import Head from "next/head";
import classNames from "classnames";
import { Tabs, TabPanel, resetIdCounter } from "react-tabs";
import { useState, useEffect } from "react";

import withAuthSync from "../lib/auth";

import { Sidebar, SidebarItem } from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import Content from "../components/layout/Content";
import Dashboard from "../components/panels/Dashboard";

// set default API location for axios requests
axios.defaults.baseURL = process.env.BACKEND_URL;

Sidebar.tabsRole = "TabList";
SidebarItem.tabsRole = "Tab";

function Index() {
	resetIdCounter();
	const [open, setOpen] = useState(true);

	const toggleSidebar = (event) => {
		if (!open) setOpen(true);
		else setOpen(false);
	};

	return (
		<div>
			<Head>
				<title></title>
				<meta name="description" content="" />
			</Head>
			<Tabs>
				<Sidebar open={open} toggleSidebar={toggleSidebar}>
					<SidebarItem name="Dashboard" icon="collection" />
				</Sidebar>
				<Header open={open} toggleSidebar={toggleSidebar} />
				<Content open={open}>
					<TabPanel>
						<Dashboard />
					</TabPanel>
				</Content>
			</Tabs>
		</div>
	);
}

export default withAuthSync(Index, ["all"]);
