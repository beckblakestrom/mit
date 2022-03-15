const Products = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Listing() {
		return products.items.map((current) => {
			console.log(current);
			let i = products.items.indexOf(current);
			let src = "./img/" + current.item + ".png";
			return (
				<div key={current.item} className="products-container">
					<img className="products-img" src={src} />
					<h1 className="products-item">{current.item}</h1>
					<h1 className="products-inventory">Inventory: {current.inventory}</h1>
					<button
						className="products-button"
						onClick={() => {
							let items = [...products.items];
							let item = { ...items[i] };
							item.inventory -= 1;
							items[i] = item;
							setProducts({ items });
						}}>
						Add to Cart
					</button>
				</div>
			);
		});
	}

	return (
		<div className="component-container">
			<Listing />
		</div>
	);
};
