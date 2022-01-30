function NavBar({ menuitems }) {
	const updatedList = menuitems
		.filter((menuitems) => menuitems % 2)
		.map((listItems, index) => {
			return <button key={index.toString()}>{listItems}</button>;
		});

	return <ul style={{ listStyleType: "none" }}> {updatedList}</ul>;
}

const menuitems = [1, 2, 3, 4, 5];

ReactDOM.render(
	<NavBar menuitems={menuitems} />,
	document.getElementById("root")
);
