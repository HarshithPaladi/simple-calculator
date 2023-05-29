import React, { useState } from "react";

function Calculator() {
	let [number1, setNumber1] = useState("");
	let [number2, setNumber2] = useState("");
	let [result, setResult] = useState("");

	const operation = (operator) => {
		if (number1 && number2) {
			let num1 = parseFloat(number1);
			let num2 = parseFloat(number2);
			let result;

			switch (operator) {
				case "+":
					result = num1 + num2;
					break;
				case "-":
					result = num1 - num2;
					break;
				case "x":
					result = num1 * num2;
					break;
				case "/":
					result = num1 / num2;
					break;
				default:
					break;
			}
			if (isFinite(result)) {
				setResult(result);
			} else if (isNaN(result)) {
				setResult("Not Possible");
			} else {
				setResult(result.toString());
			}
		}
	};

	const reset = () => {
		setNumber1("");
		setNumber2("");
		setResult("");
	};

async function copyToClipboard() {
	if ("clipboard" in navigator) {
		return await navigator.clipboard.writeText(result);
	} else {
		return document.execCommand("copy", true, result);
	}
}

	return (
		<div className="calc_container">
			<h1>Simple Calculator</h1>
			<hr />
			<div className="input_area">
				<input
					type="number"
					name="number1"
					id="number1"
					value={number1}
					onChange={(e) => {
						setNumber1(e.target.value);
					}}
					placeholder="Number 1"
				/>
				<input
					type="number"
					name="number2"
					id="number2"
					value={number2}
					onChange={(e) => {
						setNumber2(e.target.value);
					}}
					placeholder="Number 2"
				/>
			</div>
			<div className="result_area">
				<input
					name="Result"
					id="Result"
					value={result}
					onChange={(e) => {
						setResult(e.target.value);
					}}
					// add on every click event to copy the result to clipboard
					onClick={copyToClipboard}
					placeholder="Result"
					readOnly
				/>
			</div>
			<div className="controls-container">
				<button onClick={() => operation("+")}>+</button>
				<button onClick={() => operation("-")}>-</button>
				<button onClick={() => operation("x")}>x</button>
				<button onClick={() => operation("/")}>/</button>
				<button onClick={reset}>Reset</button>
			</div>
		</div>
	);
}
export default Calculator;
