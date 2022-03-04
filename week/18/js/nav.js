function Nav() {
	return (
		<div className="nav">
			<div className="logo">Bad Bank</div>
			<div className="link-container">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/about/">
					About
				</Link>
				<Link className="link" to="/products/">
					Products
				</Link>
			</div>
		</div>
	);
}
