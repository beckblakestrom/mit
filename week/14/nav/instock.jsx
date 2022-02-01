function ShoppingCart({ availableItems }) {
	const [stock, setStock] = React.useState(availableItems);
	const [cart, setCart] = React.useState([]);
	const moveToCart = (e) => {
		// TODO: create product and numInStock variables
		let [product, numInStock] = e.target.innerHTML.split(":");

		if (numInStock <= 0) return; // zero items in stock
		let item = stock.filter((item) => item.product == product);
		let newStock = stock.map((item) => {
			if (item.product == product) {
				item.inStock--;
			}
			return item;
		});

		setStock([...newStock]);

		setCart([...cart, ...item]); // for now don't worry about repeat items in Cart
		console.log(`Cart: ${JSON.stringify(cart)}`);
	};

	const availableItemsButtons = availableItems.map((item, index) => {
		return (
			<button
				className="button"
				id={item.product}
				key={index}
				onClick={moveToCart}>
				{item.product}:{item.inStock}
			</button>
		);
	});

	return (
		<React.Fragment>
			<ul key="stock" style={{ listStyleType: "none" }}>
				{availableItemsButtons}
			</ul>
			<h1>Shopping Cart</h1>
			<Cart cartitems={cart}> Cart Items</Cart>
		</React.Fragment>
	);
}

function Cart({ cartitems }) {
	console.log("rendering Cart");
	const availableItemsButtons = cartitems.map((item, index) => {
		return (
			<button className="button" id={item.product} key={index}>
				{item.product}
			</button>
		);
	});
	return (
		<ul id="cart-items" style={{ listStyleType: "none" }} key="cart">
			{availableItemsButtons}
		</ul>
	);
}

const availableItems = [
	{ product: "Jacket", inStock: 2 },
	{ product: "Pants", inStock: 3 },
	{ product: "Scarf", inStock: 0 },
	{ product: "Pajamas", inStock: 3 },
	{ product: "Shirt", inStock: 1 },
];

ReactDOM.render(
	<ShoppingCart availableItems={availableItems} />,
	document.getElementById("root")
);
