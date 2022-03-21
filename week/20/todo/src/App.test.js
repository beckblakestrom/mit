/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import App from "./App";
import React from "react";
import * as ReactDOM from "react-dom";

test("ToDo", () => {
	const root = document.createElement("div");
	ReactDOM.render(<App />, root);

	//after render
	// use DOM API (query selector) to make assertions
	// eslint-disable-next-line testing-library/no-node-access
	expect(root.querySelector("h1").textContent).toBe("My To-Do List");
	expect(root.querySelector("button").textContent).toBe("Add Task");
});
