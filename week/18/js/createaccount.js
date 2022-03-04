function CreateAccount() {
	const [show, setShow] = React.useState(true);
	const [status, setStatus] = React.useState("");
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const ctx = React.useContext(UserContext);

	return (
		<Card
			header="Create Account"
			status={status}
			body={
				show ? (
					<React.Fragment>
						<div className="form_container">
							<form className="form">
								<div className="form_section">
									<input
										type="text"
										name="name"
										id="name"
										className="form_input"
										placeholder="Name"
										value={name}
										onChange={(e) => setName(e.currentTarget.value)}
										required
									/>
									<label for="name" className="form_label">
										Name
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
										autocomplete="email"
										value={email}
										onChange={(e) => setEmail(e.currentTarget.value)}
									/>
									<label for="email" className="form_label">
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
									<label for="password" className="form_label">
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
								<button className="submit" type="submit">
									submit
								</button>
							</form>
						</div>
					</React.Fragment>
				) : (
					<React.Fragment></React.Fragment>
				)
			}
		/>
	);
}
