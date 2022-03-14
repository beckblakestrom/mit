const Products = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Listing() {
		for (let i = 0; i < products.items.length; i++) {
			let current = products.items[i];
			let src = "./img/" + current.item + ".png";
			return (
				<div className="products-container">
					<img className="products-img" src={src} />
					<h1 className="products-item">{current.item}</h1>
					<h1 className="products-inventory">Inventory: {current.inventory}</h1>
					<button className="products-button">Add to Cart</button>
				</div>
			);
			console.log("Hello");
		}
	}

	return (
		<div className="component-container">
			<Listing />
		</div>
	);
};
