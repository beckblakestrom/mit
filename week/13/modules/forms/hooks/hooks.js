function SignUp() {
	const [values, handleChange] = useForm({
		year: "",
		name: "",
		email: "",
		password: "",
		checkbox: false,
	});

	function handle() {
		console.log("values: ", values);
	}
	return (
		<>
			<select name="year" value={values.year} onChange={handleChange}>
				<option>Freshman</option>
				<option>Sophmore</option>
				<option>Junior</option>
				<option>Senior</option>
			</select>
			<div>Name</div>
			<input
				name="name"
				value={values.name}
				onChange={handleChange}
				type="text"
			/>
			<div>Email</div>
			<input
				name="email"
				value={values.email}
				onChange={handleChange}
				type="text"
			/>
			<div>Password</div>
			<input
				name="password"
				value={values.password}
				onChange={handleChange}
				type="text"
			/>
			<div>
				<input
					name="checkbox"
					value={values.checkbox}
					onChange={handleChange}
					type="checkbox"
				/>
				Remember Me
			</div>
			<button onClick={handle}>submit</button>
		</>
	);
}

ReactDOM.render(<SignUp />, document.getElementById("root"));
