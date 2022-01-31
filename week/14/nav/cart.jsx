function NavBar({ stockitems }) {
	const [cart, setCart] = React.useState([]);
	const [stock, setStock] = React.useState(stockitems);

	const moveToCart = (id, e) => {
		let [name, num] = e.target.innerHTML.split(":");
		let newStock = stock.map((item, index) => {
			if (item.name == name) item.instock++;
			return item;
		});
		setStock(newStock);
		console.log(id);
	};
	const updatedList = stock.map((item, index) => {
		return (
			<button
				className="button-white"
				onClick={(e) => moveToCart({ itemID: item.id }, e)}
				key={index}>
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
					display: "grid",
					gridTemplateColumns: "1fr 1fr",
				}}>
				{updatedList}
			</ul>
			<h1>Shopping Cart</h1>
		</React.Fragment>
	);
}
const menuItems = [
	{ name: "apple", instock: 2, id: 25668 },
	{ name: "pineapple", instock: 3, id: 35777 },
	{ name: "pear", instock: 0, id: 11290 },
	{ name: "peach", instock: 3, id: 11264 },
	{ name: "orange", instock: 1, id: 33255 },
];
ReactDOM.render(
	<NavBar stockitems={menuItems} />,
	document.getElementById("root")
);
