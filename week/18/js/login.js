function Login() {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [loggedIn, setLoggedIn] = React.useState(false);
	const [currentUser, setCurrentUser] = React.useState("");
	const { user, setUser } = React.useContext(UserContext);

	function checkLogin(event) {
		event.preventDefault();
		if (!validate(email, "email")) return;
		if (!validate(password, "password")) return;
		console.log(email, password);

		for (let i = 0; i < user.users.length; i++) {
			if (
				email === user.users[i].email &&
				password === user.users[i].password
			) {
				let thisUser = user.users[i];
				console.log(`match`);
				console.log(thisUser);
				setCurrentUser(thisUser);
				console.log(currentUser);
				setLoggedIn(true);
				Success(thisUser);
				return;
			} else {
				continue;
			}

			// does not match user.users[0], so not a match and then it runs again and is a match
		}
		console.log(`not a match`);
		alert(`User Does Not Exist`);
	}

	function validate(field, label) {
		if (!field) {
			setStatus("error:" + label);
			setTimeout(() => setStatus(""), 5000);
		}
		return true;
	}

	function Success(thisUser) {
		console.log(thisUser.firstName);
	}

	function clearForm() {
		setFirstName("");
		setLastName("");
		setEmail("");
		setPassword("");
		setShow(true);
	}
	return !loggedIn ? (
		<div className="full-page-container">
			<div className="form_container">
				<form className="form">
					<h1>Login</h1>
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
					<button onClick={checkLogin} className="submit" type="submit">
						Login
					</button>
					<div className="need-create">
						<h1 className="need-create-title">Don't have an account?</h1>
						<Link className="need-create-link" to="/createaccount/">
							Create Account
						</Link>
					</div>
				</form>
			</div>
		</div>
	) : (
		<div className="full-page-container">
			<div className="login-success">
				<h1>Welcome {currentUser.firstName}</h1>
				<h1>How may we assist you today?</h1>
				<div className="login-success-links">
					<Link className="login-success-button" to="/balance/">
						Balance
					</Link>
					<Link className="login-success-button" to="/deposit/">
						Deposit
					</Link>
					<Link className="login-success-button" to="/withdraw/">
						Withdraw
					</Link>
				</div>
			</div>
		</div>
	);
}
