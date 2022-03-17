const Checkout = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Total() {
		let runningTotal = 0;
		let tab = false;

		products.items.map((current) => {
			let currentTotal = current.price * current.clicks;
			runningTotal += currentTotal;
			console.log(runningTotal);

			let basket = current.clicks;
			if (basket > 0) {
				tab = true;
			}
		});

		return tab ? (
			<div>
				<h1>Total</h1>
				<h1 className="checkout-total">${runningTotal}</h1>
			</div>
		) : (
			<h1>hello</h1>
		);
	}

	function Basket() {
		return products.items.map((current) => {
			let i = products.items.indexOf(current);
			let src = "./img/" + current.item + ".png";
			let basket = current.clicks;
			let empty = false;
			if (basket > 0) {
				empty = true;
			}
			let two = false;
			if (basket > 1) {
				two = true;
			}

			return empty ? (
				<div key={current.item} className="products-container">
					<img className="products-img" src={src} />
					<div className="products-span">
						<h1 className="products-item">{current.clicks}</h1>
						<h1 className="products-item">
							{!two ? current.item : current.item + "s"}
						</h1>
					</div>

					<h1 className="products-inventory">
						Total: ${current.price * current.clicks}
					</h1>
				</div>
			) : (
				<React.Fragment></React.Fragment>
			);
		});
	}

	return (
		<div className="component-container">
			<Basket />
			<Total />
		</div>
	);
};
