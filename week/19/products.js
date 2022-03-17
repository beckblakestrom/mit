const Products = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Listing() {
		return products.items.map((current) => {
			let i = products.items.indexOf(current);
			let src = "./img/" + current.item + ".png";
			let stock = current.inventory;
			let out = false;
			if (stock === 0) {
				out = true;
			}

			return (
				<div key={current.item} className="products-container">
					<img className="products-img" src={src} />
					<div className="products-column">
						<h1 className="products-item">{current.item}</h1>
						<h1 className="products-price">Price: ${current.price}</h1>
						<h1 className="products-inventory">
							Inventory: {current.inventory}
						</h1>
					</div>
					{!out ? (
						<button
							className="products-button"
							onClick={() => {
								let items = [...products.items];
								let item = { ...items[i] };
								item.inventory -= 1;
								item.clicks += 1;
								items[i] = item;
								setProducts({ items });
							}}>
							Add to Basket
						</button>
					) : (
						<h1 className="products-out">Out of Stock</h1>
					)}
				</div>
			);
		});
	}

	return (
		<div className="component-container products">
			<h1 className="component-header">Store</h1>
			<Listing />
		</div>
	);
};
