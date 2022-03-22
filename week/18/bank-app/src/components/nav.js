function Nav() {
	return (
		<div className="nav">
			<Link to="/" className="logo">
				Bad Bank
			</Link>
			<div className="link-container">
				<Link className="link" to="/alldata/">
					Data
				</Link>
				<Link className="link" to="/balance/">
					Balance
				</Link>
				<Link className="link" to="/deposit/">
					Deposit
				</Link>
				<Link className="link" to="/withdraw/">
					Withdraw
				</Link>
			</div>
			<div className="secondary-nav">
				<Link className="link" to="/login/">
					Login
				</Link>
			</div>
		</div>
	);
}
