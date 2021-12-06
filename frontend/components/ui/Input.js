import { useState, memo } from "react";

import styles from "./Input.module.scss";

export const Message = memo(({ height, value, label, onChange }) => {
	return (
		<div className={styles.group}>
			<textarea
				name="message"
				value={value}
				style={{ height: height }}
				onChange={onChange}
			></textarea>
			<label className={styles.label}>{label}</label>
		</div>
	);
});

export const File = memo(({ style, onChange, children }) => {
	const [fileName, setFileName] = useState(children);

	function handleChange(event) {
		if (event.target.files[0]) setFileName(event.target.files[0].name);
		// pass event on to handler outside component
		onChange(event);
	}
	return (
		<div className={styles.file}>
			<label className={styles.label} style={{ style }}>
				<span>{fileName}</span>
				<input
					className={styles.input}
					onChange={handleChange}
					type="file"
					name="file"
					accept="image/png, image/jpeg"
				/>
			</label>
		</div>
	);
});

export const InputEnter = memo(
	({ type, label, value, placeholder, autocomplete, min, max, onChange, onEnter, autofocus }) => {
		const handleEnter = () => onEnter(value);
		const handleKeyDown = (event) => {
			if (event.keyCode === 13) {
				event.preventDefault();
				onEnter(value);
			}
		};
		return (
			<div>
				<div className={styles.group}>
					<input
						placeholder={placeholder}
						type={type}
						value={value}
						min={min}
						max={max}
						onKeyDown={handleKeyDown}
						autoComplete={autocomplete}
						onChange={onChange}
					/>
					<label className={styles.label}>{label}</label>
					<span className={styles.enter} onClick={handleEnter}>
						&crarr;
					</span>
				</div>
			</div>
		);
	}
);

const Input = ({
	type,
	label,
	value,
	placeholder,
	long = false,
	autocomplete,
	min,
	max,
	onChange,
	autofocus,
	children,
}) => {
	const [inputType, setInputType] = useState(type);
	const handleTogglePassword = () => {
		console.log("handle ");
		if (inputType === "password") setInputType("text");
		else setInputType("password");
	};

	return (
		<div>
			<div className={styles.group}>
				{long ? (
					<textarea
						placeholder={placeholder}
						autoFocus={autofocus}
						type={inputType}
						value={value}
						min={min}
						max={max}
						autoComplete={autocomplete}
						onChange={onChange}
					/>
				) : (
					<input
						placeholder={placeholder}
						autoFocus={autofocus}
						type={inputType || type}
						value={value}
						min={min}
						max={max}
						autoComplete={autocomplete}
						onChange={onChange}
					/>
				)}
				<label className={styles.label}>{label}</label>
				{type === "password" ? (
					<span className={styles.toggle} onClick={handleTogglePassword} id="togglePassword">
						{inputType === "password" ? "Show" : "Hide"}
					</span>
				) : null}
			</div>
			{children}
		</div>
	);
};

export default memo(Input);
