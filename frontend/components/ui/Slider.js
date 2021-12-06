import { useCallback, useState, useEffect } from "react";

import styles from "../components/ui/Slider.module.scss";

export default function Component({ min = 1, max = 100, value = 50, onChange }) {
	const [internalValue, setInternalValue] = useState(value);

	const handleChange = useCallback((e) => {
		e.persist();
		setInternalValue(e.target.value);
		setTimeout(() => {
			onChange(e.target.value);
		}, 300);
	});
	const handleWheel = useCallback((e) => {
		const newValue = Number(internalValue) + Number(e.deltaY / -100);
		if (newValue > Number(max) || newValue < Number(min)) {
			setInternalValue(internalValue);
			onChange(internalValue);
		} else {
			setInternalValue(newValue);
			onChange(newValue);
		}
	});
	// Change internal state whenever we get a new external value
	useEffect(() => {
		setInternalValue(value);
	}, [value]);

	return (
		<div className={styles.slider}>
			<input
				type="range"
				min={min}
				max={max}
				value={internalValue}
				onChange={handleChange}
				onWheel={handleWheel}
				className={styles.input}
			/>
			<div>
				<input
					type="number"
					min={min}
					max={max}
					value={internalValue}
					onChange={handleChange}
					className={styles.number}
				/>{" "}
			</div>
		</div>
	);
}
