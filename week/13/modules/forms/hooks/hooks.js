function SignUp() {
	const [year, setYear] = React.useState("");
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [checkbox, setCheckbox] = React.useState("");

	function handle() {
		console.log("checkbox: ", setCheckbox);
	}
	return (
		<>
			<select value={year} onChange={(e) => setYear(e.target.value)}>
				<option>Freshman</option>
				<option>Sophmore</option>
				<option>Junior</option>
				<option>Senior</option>
			</select>
			<div>Name</div>
			<input
				value={name}
				onChange={(e) => setName(e.target.value)}
				type="text"
			/>
			<div>Email</div>
			<input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				type="text"
			/>
			<div>Password</div>
			<input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="text"
			/>
			<div>
				<input
					value={checkbox}
					onChange={(e) => setCheckbox(e.target.checked)}
					type="checkbox"
				/>
				Remember Me
			</div>
			<button onClick={handle}>submit</button>
		</>
	);
}

ReactDOM.render(<SignUp />, document.getElementById("root"));
