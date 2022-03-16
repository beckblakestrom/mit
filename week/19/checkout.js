const Checkout = () => {
	const { products, setProducts } = React.useContext(UserContext);
	function Basket() {
		return products.items.map((current) => {
			let i = products.items.indexOf(current);
			let src = "./img/" + current.item + ".png";
			let basket = current.clicks;
			let empty = false;
			if (basket > 0) {
				empty = true;
			}

			return empty ? (
				<div key={current.item} className="products-container">
					<img className="products-img" src={src} />
					<h1 className="products-item">{current.item}</h1>
					<h1 className="products-inventory">Basket: {current.clicks}</h1>
				</div>
			) : (
				<React.Fragment></React.Fragment>
			);
		});
	}

	return (
		<div className="component-container">
			<Basket />
		</div>
	);
};
