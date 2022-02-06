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
				placeholder="100"
				className="input"
				type="number"
				onChange={onChange}></input>
			{/* submit button */}
			<input className="submit" type="submit" value="Submit"></input>
		</label>
	);
};

// main app
const Account = () => {
	let deposit = 0; // state of this transaction
	console.log(`initial deposit = ${deposit}`);
	// total
	const [totalState, setTotalState] = React.useState(0);

	// deposit or withdrawal
	const [isDeposit, setIsDeposit] = React.useState(true);

	// current balance printout
	let status = `Current Balance: $${totalState} `;

	// handles change within input
	const handleChange = (event) => {
		// changes deposit amount
		deposit = Number(event.target.value);
		console.log(`after handleChange deposit = ${deposit}`);
	};

	// handles submit button
	const handleSubmit = () => {
		event.preventDefault();
		if (isDeposit == false && deposit > totalState) {
			alert("insufficient funds");
			newTotal = totalState;
		} else {
			// creates new variables "newTotal". If isDeposit = true, add deposit. Else, subtract deposit.
			let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
			// change totalState to above newTotal
			setTotalState(newTotal);
			console.log(`after submit deposit = ${deposit}`);
		}
	};

	// html returned
	return (
		<form className="container" onSubmit={handleSubmit}>
			<i className="bitcoin bi bi-currency-bitcoin"></i>
			<i className="lock bi bi-file-lock"></i>

			{/* welcome header */}
			<h1 className="welcome">Welcome to React Bank</h1>

			{/* please select header */}
			<h2 className="select">Please Select:</h2>

			{/* buttons to select deposit or withdrawal */}
			<button className="button button-1" onClick={() => setIsDeposit(true)}>
				Deposit <i className="icon icon-1 bi bi-cash-coin"></i>
			</button>
			<button className="button button-2" onClick={() => setIsDeposit(false)}>
				Withdrawal <i className="icon icon-2 bi bi-cash-stack"></i>
			</button>

			{/*  */}
			<ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>

			{/* current balace printout */}
			<h2 id="total">{status}</h2>
		</form>
	);
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
