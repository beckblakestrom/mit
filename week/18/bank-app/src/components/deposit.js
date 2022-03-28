import React from "react";
import { useContext } from "react";
import { UserContext } from "./context";

// callback function, takes onclick functions
const ATMDeposit = ({ onChange, isDeposit }) => {
	// Choices for warning
	const choice = ["You are Depositing -", "You are Withdrawing -"];

	// html return
	return (
		<label className="input-container">
			{/* choice[0] for deposit or choice[1] for withdrawal */}
			<h3 className="warning"> {choice[Number(!isDeposit)]}</h3>
			{/* value input */}
			<input
				id="depositId"
				placeholder="100"
				className="input"
				type="number"
				onChange={onChange}></input>
			{/* submit button */}
			<input
				className="deposit-submit"
				type="submit"
				value="Submit"
				onClick={() => {
					document.getElementById("depositId").value = 0;
				}}></input>
		</label>
	);
};

export default function Deposit() {
	const {
		user,
		setUser,
		loggedIn,
		setLoggedIn,
		currentUser,
		currentUserIndex,
	} = useContext(UserContext);

	let deposit = 0; // state of this transaction
	const [totalState, setTotalState] = React.useState(0);

	// deposit or withdrawal
	const [isDeposit, setIsDeposit] = React.useState(true);

	// current balance printout
	let status = `Current Balance: $${currentUser.balance} `;
	let balance = currentUser.balance;

	// handles change within input
	const handleChange = (event) => {
		// changes deposit amount
		deposit = Number(event.target.value);
	};

	function clearDeposit() {}

	// handles submit button
	const handleSubmit = (event) => {
		event.preventDefault();

		// creates new variables "newTotal". If isDeposit = true, add deposit. Else, subtract deposit.
		let newTotal = balance + deposit;
		// change totalState to above newTotal
		setTotalState(newTotal);
		console.log("balance after:", user.users[currentUserIndex].balance);

		// create shallow state
		let tempState = [...user.users];

		let tempUser = tempState[currentUserIndex];

		tempUser.balance = newTotal;
		console.log("tempUser Updated:", tempUser);
		tempState[currentUserIndex] = tempUser;
		console.log("tempState:", tempState);
		clearDeposit();
	};

	// html returned
	return (
		<div className="full-page-container">
			<form className="container" onSubmit={handleSubmit}>
				<i className="bitcoin bi bi-currency-bitcoin"></i>
				<i className="lock bi bi-file-lock"></i>

				{/* welcome header */}
				<h1 className="welcome">Deposit</h1>

				{/* please select header */}

				{/*  */}
				<ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>

				{/* current balace printout */}
				<h2 id="total">{status}</h2>
			</form>
		</div>
	);
}
