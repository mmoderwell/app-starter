import { memo } from "react";
import Select, { components } from "react-select";
import AsyncSelect from "react-select/async";

import styles from "../components/ui/Select.module.scss";

const customStyles = {
	menu: (provided, state) => ({
		...provided,
		color: state.selectProps.menuColor,
		outline: "none",
	}),
	control: (provided, state) => ({
		...provided,
		borderRadius: "4px",
		padding: "0.25em 0",
	}),
	indicatorSeparator: (provided, state) => ({
		...provided,
		display: "none",
	}),
	menuList: (provided, state) => ({
		...provided,
		padding: "0px",
		borderRadius: "4px",
		outline: "0px solid",
		border: "0px solid",
	}),
	option: (provided, state) => ({
		...provided,
		outline: "none",
	}),
};

const theme = (theme) => ({
	...theme,
	borderRadius: 0,
	colors: {
		...theme.colors,
		primary: "#573cee",
		primary25: "#eee",
	},
});

const Component = memo(({ label, value, options, onChange, isMulti = false, isDisabled }) => {
	return (
		<Select
			instanceId={label}
			styles={customStyles}
			theme={theme}
			options={options}
			value={value}
			onChange={onChange}
			isMulti={isMulti}
			isDisabled={isDisabled}
		/>
	);
});

const SelectAsync = memo(
	({ label, options, value, defaultOptions, isMulti = false, isDisabled, onChange }) => {
		return (
			<AsyncSelect
				instanceId={label}
				cacheOptions
				isMulti={isMulti}
				isDisabled={isDisabled}
				value={value}
				loadOptions={options}
				defaultOptions={defaultOptions}
				onChange={onChange}
				styles={customStyles}
				theme={theme}
			/>
		);
	}
);

export default Component;
export { SelectAsync };
