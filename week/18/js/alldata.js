function AllData() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<h1>All Data Component</h1>
			{JSON.stringify(ctx.users)};
		</div>
	);
}
