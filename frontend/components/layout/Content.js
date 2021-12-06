import classNames from "classnames";

function Content({ open, children }) {
	return (
		<div
			className={classNames([
				// "sm:left-0",
				{ "left-0": !open },
				{ "md:left-20vw": open },
				{ "mx-auto": !open },
				// "mx-auto",
				"absolute",
				"right-0",
				"top-24",
				"px-6",
				"-z-1",
				"md:w-80vw",
				"w-full",
				"max-w-7xl",
			])}
		>
			{children}
		</div>
	);
}

export default Content;
