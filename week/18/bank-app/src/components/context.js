import React from "react";

import ReactRouterDOM from "react";
import { createContext } from "react";

export const UserContext = createContext(null);
export const Route = ReactRouterDOM.Route;
export const Routes = ReactRouterDOM.Routes;
export const Link = ReactRouterDOM.Link;
export const HashRouter = ReactRouterDOM.HashRouter;

export function Banner(props) {
	return (
		<div className="banner">
			<img className="banner-image" src={props.image} alt="React Home" />
			<h1 className="banner-text">{props.text}</h1>
		</div>
	);
}
