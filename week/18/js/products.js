function Products() {
	const ctx = React.useContext(UserContext);
	ctx.users.push(Math.random().toString(36).substring(2, 5));
	return (
		<div>
			<h1>Products Component</h1>
			{JSON.stringify(ctx.users)}
		</div>
	);
}
