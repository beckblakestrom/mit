import React from "react";
import { useContext } from "react";
import { UserContext } from "./context";

import { Link } from "react-router-dom";

export default function Balance() {
	const { currentUser, loggedIn } = useContext(UserContext);
	return loggedIn ? (
		<div>
			<div className="page-container">
				<div className="account-container">
					<h1 className="account-welcome">
						Hi, {currentUser.firstName}. Here are your account details.
					</h1>
					<h1 className="account-balance">
						Current Balance: ${currentUser.balance}
					</h1>
					<div className="account-transaction-container">
						<h1 className="account-transaction-header">Latest Transactions</h1>
					</div>
					<Link className="account-deposit grid-button" to="/deposit/">
						Transfer <i class="bi bi-arrow-left-right"></i>
					</Link>
					<Link className="account-deposit grid-button" to="/deposit/">
						Deposit <i class="bi bi-cash"></i>
					</Link>
					<Link className="account-withdraw grid-button" to="/withdraw/">
						Withdrawal <i className="icon icon-2 bi bi-cash-stack"></i>
					</Link>
				</div>
			</div>
		</div>
	) : (
		<div className="page-container-center">
			<h1 className="please-login">Please Log In</h1>
		</div>
	);
}
