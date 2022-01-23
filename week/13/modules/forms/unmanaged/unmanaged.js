function SignUp() {
	function handle() {
		console.log(document.getElementById("year").value);
	}
	return (
		<>
			<select id="year">
				<option>Freshman</option>
				<option>Sophmore</option>
				<option>Junior</option>
				<option>Senior</option>
			</select>
			<div>Name</div>
			<input id="name" type="text" />
			<div>Email</div>
			<input id="email" type="text" />
			<div>Password</div>
			<input id="password" type="text" />
			<div>
				<input type="checkbox" id="checkbox" />
				Remember Me
			</div>
			<button onClick={handle}>submit</button>
		</>
	);
}

ReactDOM.render(<SignUp />, document.getElementById("root"));
