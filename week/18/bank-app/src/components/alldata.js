import React from "react";
import { useContext } from "react";
import { UserContext } from "./context";

export default function AllData() {
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<h1>First Name User 0</h1>
			{user.users[0].firstName}
			<br />

			<div>
				<h1>All Users</h1>
				{JSON.stringify(user.users)};
			</div>
		</div>
	);
}
