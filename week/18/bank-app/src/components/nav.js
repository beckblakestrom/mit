import Login from "./login";
import React from "react";
import { useState, useContext } from "react";
import { UserContext, Link } from "./context";

export default function Nav() {
	const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);

	return !loggedIn ? (
		<React.Fragment>
			<div className="nav">
				<Link to="/" className="logo">
					Bad Bank
				</Link>
				<div className="link-container">
					<Link className="link" to="/alldata/">
						Data
					</Link>
					<Link className="link" to="/balance/">
						Balance
					</Link>
					<Link className="link" to="/deposit/">
						Deposit
					</Link>
					<Link className="link" to="/withdraw/">
						Withdraw
					</Link>
				</div>
			</div>
			<div id="login-dropdown" className="secondary-nav">
				<Login />
				<button
					className="login-dropdown"
					onClick={() => {
						document.getElementById("login-dropdown").classList.toggle("drop");
					}}>
					Login
				</button>
			</div>
		</React.Fragment>
	) : (
		<React.Fragment>
			<div className="nav">
				<Link to="/" className="logo">
					Bad Bank
				</Link>
				<div className="link-container">
					<Link className="link" to="/alldata/">
						Data
					</Link>
					<Link className="link" to="/balance/">
						Balance
					</Link>
					<Link className="link" to="/deposit/">
						Deposit
					</Link>
					<Link className="link" to="/withdraw/">
						Withdraw
					</Link>
				</div>
			</div>
			<div id="login-dropdown" className="secondary-nav">
				<Login />
				<button
					className="login-dropdown"
					onClick={() => {
						setLoggedIn(false);
					}}>
					Logout
				</button>
			</div>
		</React.Fragment>
	);
}
