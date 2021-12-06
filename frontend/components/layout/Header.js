import { MenuIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import classNames from "classnames";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import { useAuth } from "../../context/user";

function Header({ open, toggleSidebar }) {
	const auth = useAuth();

	return (
		<div
			className={classNames([
				"fixed",
				"bg-white",
				"dark:bg-gray-800",
				"max-w-7xl",
				"md:w-80vw",
				"w-full",
				"right-0",
				{ "mx-0": open },
				{ "mx-auto": !open },
				{ "left-0": !open },
				{ "md:left-20vw": open },
			])}
		>
			<div className={classNames(["px-6"])}>
				<div className="flex justify-between items-center py-6">
					<div className="flex justify-start lg:flex-1">
						<div className="flex items-center cursor-pointer z-10" onClick={toggleSidebar}>
							<MenuIcon className="flex-shrink-0 h-5 w-5 dark:text-white" aria-hidden="true" />
							<span className="px-2 font-semibold dark:text-white">Menu</span>
						</div>
					</div>

					<div className="hidden md:flex">
						<a href="#">
							<img
								className="h-8 w-auto sm:h-10 filter grayscale"
								src="/images/logo.png"
								alt="Logo"
							/>
						</a>
					</div>

					<div className="flex items-center justify-end flex-1">
						<Menu as="div" className="relative inline-block text-left">
							<div>
								<Menu.Button
									className={classNames([
										"flex",
										"items-center",
										"px-4",
										"py-2",
										"mx-4",
										"font-semibold",
										"tracking-wide",
										"text-black",
										"dark:text-white",
										"bg-transparent",
										"rounded-full",
										"border",
										"border-gray-200",
										"hover:bg-gray-100",
										"dark:hover:bg-gray-800",
									])}
								>
									{auth.user && auth.user.name}
									<ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
								</Menu.Button>
							</div>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-100"
								enterFrom="transform opacity-0 scale-95"
								enterTo="transform opacity-100 scale-100"
								leave="transition ease-in duration-75"
								leaveFrom="transform opacity-100 scale-100"
								leaveTo="transform opacity-0 scale-95"
							>
								<Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
									<div className="py-1">
										<Menu.Item>
											{({ active }) => (
												<button
													onClick={auth.signout}
													type="submit"
													className={classNames(
														active ? "bg-gray-100 text-gray-900" : "text-gray-700",
														"block w-full text-left px-4 py-2 text-sm"
													)}
												>
													Sign out
												</button>
											)}
										</Menu.Item>
									</div>
								</Menu.Items>
							</Transition>
						</Menu>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
