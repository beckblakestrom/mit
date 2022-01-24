function SignUp() {
	const [values, handleChange] = useForm({
		year: "",
		name: "",
		email: "",
		password: "",
		checkbox: false,
	});

	const [errors, setError] = React.useState({
		nameError: "",
		emailError: "",
		passwordError: "",
	});

	function validate() {
		if (!values.name) {
			setError({ ...errors, nameError: "Please enter a name." });
		} else {
			setError({ ...errors, nameError: "" });
		}

		if (!values.email) {
			setError({ ...errors, emailError: "Please enter a email address." });
		} else {
			setError({ ...errors, emailError: "" });
		}
	}

	function handle() {
		validate();
	}
	return (
		<>
			<div>Name</div>
			<input
				name="name"
				value={values.name}
				onChange={handleChange}
				type="text"
			/>
			<div style={{ color: "red" }}>{errors.nameError}</div>
			<div>Email</div>
			<input
				name="email"
				value={values.email}
				onChange={handleChange}
				type="text"
			/>
			<div style={{ color: "red" }}>{errors.emailError}</div>
			<div>Password</div>
			<input
				name="password"
				value={values.password}
				onChange={handleChange}
				type="text"
			/>
			<div style={{ color: "red" }}>{errors.passwordError}</div>
			<br />
			<button onClick={handle}>submit</button>
		</>
	);
}

ReactDOM.render(<SignUp />, document.getElementById("root"));
