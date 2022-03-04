function Spa() {
	return (
		<HashRouter>
			<Nav />
			<UserContext.Provider
				value={{
					users: [
						{
							name: "Blake",
							email: "email@gmail.com",
							password: "secret",
							balance: 120000,
						},
					],
				}}>
				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/alldata/" element={<AllData />} />
					<Route path="/balance/" element={<Balance />} />
					<Route path="/createaccount/" element={<CreateAccount />} />
					<Route path="/deposit/" element={<Deposit />} />
					<Route path="/login/" element={<Login />} />
					<Route path="/withdraw/" element={<Withdraw />} />
				</Routes>
			</UserContext.Provider>
		</HashRouter>
	);
}

ReactDOM.render(<Spa />, document.getElementById("root"));
