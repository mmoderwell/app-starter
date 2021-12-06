import { useState, useEffect } from "react";

import { InputEnter } from "../components/ui/Input";
import Checkbox from "../components/ui/Checkbox";

import styles from "./Checklist.module.scss";

export default function Checklist({ initial = [], label, onChange }) {
	const [input, setInput] = useState("");
	const [optionList, setOptionList] = useState(initial);

	useEffect(() => {
		const filtered = optionList.filter((el) => el != null);
		onChange(filtered);
	}, [optionList]);

	return (
		<div>
			<div className={styles.input}>
				<InputEnter
					label={label}
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
					onEnter={(value) => {
						if (!value) return;
						setInput("");
						setOptionList([...optionList].concat([{ value, isAnswer: false }]));
					}}
				/>
			</div>
			<div
				className={styles.header}
				style={{ display: optionList.filter((el) => el != null).length ? "block" : "none" }}
			>
				<span>Correct?</span>
			</div>
			<ul className={styles.options}>
				{optionList.map((option, index) => {
					if (!option) return;
					return (
						<li key={index}>
							<Checkbox
								checked={option.isAnswer}
								color="secondary"
								onClick={(event) => {
									const newList = [...optionList];
									newList[index] = { ...newList[index], isAnswer: event.target.checked };
									setOptionList(newList);
								}}
							/>
							<span>{option.value}</span>
							<button
								className={styles.remove}
								type="button"
								onClick={() => {
									const listCopy = [...optionList];
									delete listCopy[index];
									setOptionList(listCopy);
								}}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
