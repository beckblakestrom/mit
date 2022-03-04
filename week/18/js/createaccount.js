function CreateAccount() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<h1>CreateAccount Component</h1>
			{JSON.stringify(ctx.users)};
		</div>
	);
}
