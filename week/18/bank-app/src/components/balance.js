function Balance() {
	const { user, setUser } = React.useContext(UserContext);
	return (
		<div>
			<div className="page-container">
				<div className="account-container">
					<h1 className="account-welcome">
						Hi, {user.users[0].firstName}. Here are your account details.
					</h1>
					<h1 className="account-balance">
						Current Balance: ${user.users[0].balance}
					</h1>
					<div className="account-transaction-container">
						<h1 className="account-transaction-header">Latest Transactions</h1>
					</div>
					<Link className="account-deposit grid-button" to="/deposit/">
						Deposit <i className="icon icon-1 bi bi-cash-coin"></i>
					</Link>
					<Link className="account-withdraw grid-button" to="/withdraw/">
						Withdrawal <i className="icon icon-2 bi bi-cash-stack"></i>
					</Link>
				</div>
			</div>
		</div>
	);
}
