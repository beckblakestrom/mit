function Home() {
	const ctx = React.useContext(UserContext);
	return (
		<div>
			<h1>Home Component</h1>
			{ctx.users[0].name}
		</div>
	);
}
