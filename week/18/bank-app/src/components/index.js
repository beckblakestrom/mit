import React from "react";
import { useState } from "react";

import { UserContext, Route, Routes, HashRouter, Link } from "./context";
import Nav from "./nav";
import Home from "./home";
import AllData from "./alldata";
import Balance from "./balance";
import CreateAccount from "./createaccount";
import Deposit from "./deposit";
import Login from "./login";
import Withdraw from "./withdraw";

export default function Spa() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState("");
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	const [user, setUser] = useState({
		users: [
			{
				firstName: "Blake",
				lastName: "Beckstrom",
				email: "blake@gmail.com",
				password: "hard",
				balance: 120000,
				transactions: {
					date: "3/27/2022",
					amount: 45,
				},
			},
			{
				firstName: "Tony",
				lastName: "Robbins",
				email: "tony@gmail.com",
				password: "hard",
				balance: 555,
				transactions: {
					date: "3/27/2022",
					amount: 45,
				},
			},
		],
	});
	return (
		<HashRouter>
			<UserContext.Provider
				value={{
					user,
					setUser,
					loggedIn,
					setLoggedIn,
					currentUser,
					setCurrentUser,
					currentUserIndex,
					setCurrentUserIndex,
				}}>
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
