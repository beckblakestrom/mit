function AllData() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<h1>First Name User 0</h1>
			{ctx.users[0].firstName}
			<br />

			<div>
				<h1>All Users</h1>
				{JSON.stringify(ctx.users)};
			</div>
		</div>
	);
}
