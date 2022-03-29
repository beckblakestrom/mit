import React from "react";
import { Link } from "./context";
export default function About() {
	return (
		<div className="about-container">
			<h1 className="about-heading">
				Blake Beckstrom's React Bank Application for MIT
			</h1>
			<h4 className="about-sub">
				Please feel free to{" "}
				<Link to="/createaccount/" className="about-link">
					Create an Account
				</Link>
			</h4>
			<h4 className="about-sub">
				Or use the example account by{" "}
				<span
					onClick={() => {
						document.getElementById("login-dropdown").classList.toggle("drop");
					}}
					className="about-link">
					logging in
				</span>{" "}
				using the details below
			</h4>
			<ul className="about-list">
				<li className="about-list-element">
					email:{" "}
					<span className="about-list-element-input">johndoe@gmail.com</span>
				</li>
				<li className="about-list-element">
					password: <span className="about-list-element-input">secret</span>
				</li>
			</ul>
		</div>
	);
}
