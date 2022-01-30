import { button } from "react-bootstrap";

function NavBar({ menuitems }) {
	const { button } = ReactBootstrap;
	const updatedList = menuitems.map((listItems, index) => {
		return <li key={index.toString()}>{listItems}</li>;
	});

	return <ul style={{ listStyleType: "none" }}> {updatedList}</ul>;
}

const menuitems = [1, 2, 3, 4, 5];

ReactDOM.render(
	<NavBar menuitems={menuitems} />,
	document.getElementById("root")
);
