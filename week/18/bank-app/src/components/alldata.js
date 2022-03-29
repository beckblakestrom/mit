import React from "react";
import { useContext } from "react";
import { UserContext } from "./context";

export default function AllData() {
	const { user, setUser } = useContext(UserContext);
	return (
		<div className="data-container">
			<h1 className="data-header">All User Data</h1>
			<div className="data">{JSON.stringify(user.users)};</div>
		</div>
	);
}
