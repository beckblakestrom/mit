/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import {
	render,
	fireEvent,
	getByPlaceholderText,
	screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import React from "react";

test("ToDo", () => {
	const { getByText } = render(<App />);

	//after render
	// use DOM API (query selector) to make assertions
	// eslint-disable-next-line testing-library/no-node-access
	getByText("My To-Do List");
	getByText("Add Task");
});

test("add items to list", () => {
	const { getByText } = render(<App />);

	//after render
	// use DOM API (query selector) to make assertions
	// eslint-disable-next-line testing-library/no-node-access
	getByText("My To-Do List");
	const input = screen.getByPlaceholderText("I need to...");
	fireEvent.change(input, { target: { value: "wash car" } });
	fireEvent.click(getByText("Add Task"));

	// confirm
	getByText("wash car");
});
// user event expresses intent better
test("user-events allows users to add...", () => {
	const { getByText, getByPlaceholderText } = render(<App />);
	const input = screen.getByPlaceholderText("I need to...");
	const button = getByText("Add Task");

	userEvent.type(input, "Learn Spanish");
	userEvent.click(button);

	getByText("Learn Spanish");
});
