import React from "react";

import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { createContext } from "react";

export const UserContext = createContext(null);

export { Route, Routes, Link, HashRouter };

export function Banner(props) {
	return (
		<React.Fragment>
			<div className="banner">
				<img className="banner-image" src={props.image} alt="React Home" />
				<h1 className="banner-text">{props.text}</h1>
			</div>
			<div className="products-container">
				<h1 className="products-header">Products & Services</h1>
				<div className="products">
					<div className="product-item">
						<h6>Credit Cards</h6>
						<i class="bi bi-credit-card-2-front"></i>
					</div>
					<div className="product-item">
						<h6>Checking Accounts</h6>
						<i class="bi bi-wallet2"></i>
					</div>
					<div className="product-item">
						<h6>Savings Accounts</h6>
						<i class="bi bi-piggy-bank"></i>
					</div>
					<div className="product-item">
						<h6>Investment Portfolios</h6>
						<i class="bi bi-graph-up-arrow"></i>
					</div>
					<div className="product-item">
						<h6>Lending</h6>
						<i class="bi bi-house"></i>
					</div>
					<div className="product-item">
						<h6>Currency Exchange</h6>
						<i class="bi bi-currency-exchange"></i>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
