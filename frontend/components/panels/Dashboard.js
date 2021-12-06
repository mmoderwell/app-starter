import classNames from "classnames";
import { CalendarIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Dashboard() {
	const stats = [
		{ name: "Minutes clean", stat: "71,897" },
		{ name: "Avg. Open Rate", stat: "58.16%" },
		{ name: "Avg. Click Rate", stat: "24.57%" },
	];
	const positions = [
		{
			id: 1,
			title: "Back End Developer",
			department: "Engineering",
			closeDate: "2020-01-07",
			closeDateFull: "January 7, 2020",
			applicants: [
				{
					name: "Dries Vincent",
					email: "driesvincent@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Lindsay Walton",
					email: "lindsaywalton@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Courtney Henry",
					email: "courtneyhenry@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Tom Cook",
					email: "tomcook@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			],
		},
		{
			id: 2,
			title: "Front End Developer",
			department: "Engineering",
			closeDate: "2020-01-07",
			closeDateFull: "January 7, 2020",
			applicants: [
				{
					name: "Whitney Francis",
					email: "whitneyfrancis@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Leonard Krasner",
					email: "leonardkrasner@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Floyd Miles",
					email: "floydmiles@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			],
		},
		{
			id: 3,
			title: "User Interface Designer",
			department: "Design",
			closeDate: "2020-01-14",
			closeDateFull: "January 14, 2020",
			applicants: [
				{
					name: "Emily Selman",
					email: "emilyselman@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Kristin Watson",
					email: "kristinwatson@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
				{
					name: "Emma Dorsey",
					email: "emmadorsey@example.com",
					imageUrl:
						"https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
				},
			],
		},
	];

	return (
		<section className={classNames(["animate__animated", "animate__fadeIn"])}>
			<div className="pb-12">
				<div className="pb-2 mb-4 border-b border-gray-200">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Your Progress</h3>
					<p className="mt-2 max-w-4xl text-sm text-gray-500">
						Workcation is a property rental website. Etiam ullamcorper massa viverra consequat,
						consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.
					</p>
				</div>
				<div className="py-4">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
					<dl className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3">
						{stats.map((item) => (
							<div
								key={item.name}
								className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
							>
								<dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
								<dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			<div className="pb-12">
				<div className="pb-2 mb-4 border-b border-gray-200">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Daily Check-in</h3>
					<p className="mt-2 max-w-4xl text-sm text-gray-500">
						Workcation is a property rental website. Etiam ullamcorper massa viverra consequat,
						consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.
					</p>
				</div>
				<button
					type="button"
					className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Get started
				</button>
			</div>
			<div className="pb-12">
				<div className="pb-2 mb-4 border-b border-gray-200">
					<h3 className="text-lg leading-6 font-medium text-gray-900">Your Groups</h3>
					<p className="mt-2 max-w-4xl text-sm text-gray-500">
						Workcation is a property rental website. Etiam ullamcorper massa viverra consequat,
						consectetur id nulla tempus. Fringilla egestas justo massa purus sagittis malesuada.
					</p>
				</div>
				<div className="bg-white shadow overflow-hidden sm:rounded-md">
					<ul role="list" className="divide-y divide-gray-200">
						{positions.map((position) => (
							<li key={position.id}>
								<a href="#" className="block hover:bg-gray-50">
									<div className="px-4 py-4 flex items-center sm:px-6">
										<div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
											<div className="truncate">
												<div className="flex text-sm">
													<p className="font-medium text-indigo-600 truncate">{position.title}</p>
													<p className="ml-1 flex-shrink-0 font-normal text-gray-500">
														in {position.department}
													</p>
												</div>
												<div className="mt-2 flex">
													<div className="flex items-center text-sm text-gray-500">
														<CalendarIcon
															className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
															aria-hidden="true"
														/>
														<p>
															Closing on{" "}
															<time dateTime={position.closeDate}>{position.closeDateFull}</time>
														</p>
													</div>
												</div>
											</div>
											<div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
												<div className="flex overflow-hidden -space-x-1">
													{position.applicants.map((applicant) => (
														<img
															key={applicant.email}
															className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
															src={applicant.imageUrl}
															alt={applicant.name}
														/>
													))}
												</div>
											</div>
										</div>
										<div className="ml-5 flex-shrink-0">
											<ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
										</div>
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Dashboard;
