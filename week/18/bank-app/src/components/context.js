import React from "react";

import { HashRouter, Route, Routes, Link } from "react-router-dom";
import { createContext } from "react";

export const UserContext = createContext(null);

export { Route, Routes, Link, HashRouter };

export function Banner(props) {
	return (
		<div className="banner">
			<img className="banner-image" src={props.image} alt="React Home" />
			<h1 className="banner-text">{props.text}</h1>
		</div>
	);
}
