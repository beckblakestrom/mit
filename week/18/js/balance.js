function Balance() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<div className="page-container">
				<div className="account-container">
					<h1 className="account-welcome">
						Hi, {ctx.users[0].firstName}. Here are your account details.
					</h1>
					<h1 className="account-balance">
						Current Balance: ${ctx.users[0].balance}
					</h1>
					<div className="account-transaction-container">
						<h1 className="account-transaction-header">Latest Transactions</h1>
					</div>
					<Link className="account-button account-deposit" to="/deposit/">
						Deposit
					</Link>
					<Link className="account-button account-withdraw" to="/withdraw/">
						Withdraw
					</Link>
				</div>
			</div>
		</div>
	);
}
