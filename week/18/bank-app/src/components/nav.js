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
					Arthurs
				</Link>
				<div className="link-container">
					<Link className="link" to="/alldata/">
						Personal
					</Link>
					<Link className="link" to="/balance/">
						Small Business
					</Link>
					<Link className="link" to="/deposit/">
						Corporate
					</Link>
					<Link className="link" to="/withdraw/">
						About
					</Link>
				</div>
			</div>
			<div id="login-dropdown" className="secondary-nav">
				<Login />
				<button
					id="login-button"
					className="login-dropdown"
					onClick={() => {
						document.getElementById("login-dropdown").classList.toggle("drop");
						document.getElementById("login-button").classList.toggle("show");
						document.getElementById("down-arrow").classList.toggle("show");
					}}>
					Login
				</button>
				<i
					id="down-arrow"
					class="bi bi-caret-up-fill login-dropdown-arrow show"
					onClick={() => {
						document.getElementById("login-dropdown").classList.toggle("drop");
						document.getElementById("login-button").classList.toggle("show");
						document.getElementById("down-arrow").classList.toggle("show");
					}}></i>
			</div>
		</React.Fragment>
	) : (
		<React.Fragment>
			<div className="nav">
				<Link to="/" className="logo">
					Arthurs
				</Link>
				<div className="link-container">
					<Link className="link" to="/alldata/">
						Data
					</Link>
					<Link className="link" to="/balance/">
						Account
					</Link>

					<Link
						to="/"
						onClick={() => {
							setLoggedIn(false);
							document
								.getElementById("login-dropdown")
								.classList.remove("drop");
							document.getElementById("down-arrow").classList.remove("drop");
						}}
						className="link">
						Logout
					</Link>
				</div>
			</div>
			<div id="login-dropdown" className="secondary-nav">
				<Login />
				<button
					className="login-dropdown-tools"
					onClick={() => {
						document.getElementById("login-dropdown").classList.toggle("drop");
					}}>
					Quick Access
				</button>
			</div>
		</React.Fragment>
	);
}
