function NavBar({ stockitems }) {
	const [cart, setCart] = React.useState([]);
	const [stock, setStock] = React.useState(stockitems);

	const moveToCart = (e) => {
		let [name, num] = e.target.innerHTML.split(":");
		let newStock = stock.map((item, index) => {
			if (item.name == name) item.instock++;
			return item;
		});
		setStock(newStock);
	};
	const updatedList = stock.map((item, index) => {
		return (
			<button className="button-white" onClick={moveToCart} key={index}>
				{item.name}:{item.instock}
			</button>
		);
	});
	// note that React needs to have a single Parent
	return (
		<React.Fragment>
			<ul
				style={{
					listStyleType: "none",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "start",
				}}>
				{updatedList}
			</ul>
			<h1>Shopping Cart</h1>
		</React.Fragment>
	);
}
const menuItems = [
	{ name: "apple", instock: 2 },
	{ name: "pineapple", instock: 3 },
	{ name: "pear", instock: 0 },
	{ name: "peach", instock: 3 },
	{ name: "orange", instock: 1 },
];
ReactDOM.render(
	<NavBar stockitems={menuItems} />,
	document.getElementById("root")
);
