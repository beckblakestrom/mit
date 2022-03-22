import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("./MyComponent", () => () => <div>Hello World</div>);

test("mock test", () => {
	const { container } = render(<App />);
	expect(container.textContent).toMatch("Hello World");
});
