function Balance() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<h1>Balance Component</h1>
			{JSON.stringify(ctx.users)};
		</div>
	);
}
