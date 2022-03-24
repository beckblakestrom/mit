import React from "react";
import { useState } from "react";

import { UserContext, Route, Routes, HashRouter } from "./context";
import Nav from "./nav";
import Home from "./home";
import AllData from "./alldata";
import Balance from "./balance";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Login from "./login";
import Withdraw from "./withdraw";

function Spa() {
	const [user, setUser] = useState({
		users: [
			{
				firstName: "Blake",
				lastName: "Beckstrom",
				email: "blake@gmail.com",
				password: "hard",
				balance: 120000,
			},
		],
	});
	return (
		<HashRouter>
			<UserContext.Provider value={{ user, setUser }}>
				<Nav />
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
