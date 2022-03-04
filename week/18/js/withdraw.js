function Withdraw() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<h1>Withdraw Component</h1>
			{JSON.stringify(ctx.users)};
		</div>
	);
}
