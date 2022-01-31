// use "props" to set data
function NavBar(props) {
	const list = props.menuitems;

	const handleClick = (e) => {
		alert(`you clicked ${e.target.innerHTML}`);
	};

	// each item should have a unique key
	const updatedList = list.map((listItems, index) => {
		return (
			<button onClick={handleClick} className="button" key={index}>
				{listItems}
			</button>
		);
	});
	// react needs to have a single parent
	return <ul>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NavBar menuitems={menuItems} />,
	document.getElementById("root")
);
