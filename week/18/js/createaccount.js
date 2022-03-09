function CreateAccount() {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loggedIn, setLoggedIn] = React.useState(false);
	const ctx = React.useContext(UserContext);

	function validate(field, label) {
		if (!field) {
			console.log(`empty field: ${label}`);
			console.log(JSON.stringify(field));
			return false;
		}
		return true;
	}

	function handleCreate() {
		console.log(firstName, lastName, email, password);
		if (!validate(firstName, "firstName")) return;
		if (!validate(lastName, "lastName")) return;
		if (!validate(email, "email")) return;
		if (!validate(password, "password")) return;
		ctx.users.push({ firstName, lastName, email, password, balance: 0 });
		setShow(false);
	}
	function clearForm() {
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setShow(true);
	}
	return show ? (
		<div className="full-page-container">
			<div className="form_container">
				<form className="form">
					<h1>Create Account</h1>
					<div className="form_section">
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="form_input"
							placeholder="First Name"
							value={firstName}
							onChange={(e) => setFirstName(e.currentTarget.value)}
							required
						/>
						<label htmlFor="name" className="form_label">
							First Name
						</label>
						<div className="form_input-validator"></div>
						<svg
							className="form_check"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
						</svg>
					</div>
					<div className="form_section">
						<input
							type="text"
							name="lastname"
							id="lastname"
							className="form_input"
							placeholder="Last Name"
							value={lastName}
							onChange={(e) => setLastName(e.currentTarget.value)}
							required
						/>
						<label htmlFor="lastName" className="form_label">
							Last Name
						</label>
						<div className="form_input-validator"></div>
						<svg
							className="form_check"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
						</svg>
					</div>
					<div className="form_section">
						<input
							type="email"
							name="email"
							id="email"
							className="form_input form_input-email"
							placeholder="Email Address"
							required
							autoComplete="email"
							value={email}
							onChange={(e) => setEmail(e.currentTarget.value)}
						/>
						<label htmlFor="email" className="form_label">
							Email Address
						</label>
						<div className="form_input-validator"></div>
						<svg
							className="form_check"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
						</svg>
					</div>
					<div className="form_section">
						<input
							type="password"
							name="password"
							id="password"
							className="form_input"
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.currentTarget.value)}
							required
						/>
						<label htmlFor="password" className="form_label">
							Password
						</label>
						<div className="form_input-validator"></div>
						<svg
							className="form_check"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24">
							<path d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z" />
						</svg>
					</div>
					<button onClick={handleCreate} className="submit" type="submit">
						Create Account
					</button>
					<div className="need-create">
						<h1 className="need-create-title">Already have an account?</h1>
						<Link className="need-create-link" to="/login/">
							Login
						</Link>
					</div>
				</form>
			</div>
		</div>
	) : (
		<div className="full-page-container">
			<h5>Success</h5>
			<button onClick={clearForm} className="submit" type="submit">
				Add Another Account
			</button>
		</div>
	);
}
