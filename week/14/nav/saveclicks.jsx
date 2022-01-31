// use "props" to set data
function NavBar(props) {
	const [clicks, setClicks] = React.useState([]);
	console.log(`clicks: ${clicks}`);
	const list = props.menuitems;

	const handleClick = (e) => {
		setClicks([...clicks, e.target.innerHTML]);
	};

	// each item should have a unique key
	const updatedList = list.map((listItems, index) => {
		return (
			<button onClick={handleClick} className="button-black" key={index}>
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
