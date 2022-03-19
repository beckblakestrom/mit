const Checkout = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Total() {
		let runningTotal = 0;
		let newRunningTotal = 0;
		let tab = false;

		products.items.map((current) => {
			let currentTotal = current.price * current.clicks;
			runningTotal += currentTotal;
			newRunningTotal = runningTotal.toFixed(2);

			let basket = current.clicks;
			if (basket > 0) {
				tab = true;
			}
		});

		return tab ? (
			<div className="checkout-total">
				<h1>Checkout Total:</h1>
				<h1>${newRunningTotal}</h1>
				<button
					className="products-button products-button-checkout"
					onClick={() => {
						console.log("clicked");
						setProducts({
							items: [
								{
									item: "Apple",
									inventory: 5,

									clicks: 0,
									price: 2,
								},
								{
									item: "Orange",
									inventory: 5,

									clicks: 0,
									price: 3,
								},
								{
									item: "Pear",
									inventory: 5,

									clicks: 0,
									price: 1.5,
								},
								{
									item: "Banana",
									inventory: 5,

									clicks: 0,
									price: 2,
								},
							],
						});
					}}>
					Checkout
				</button>
			</div>
		) : (
			<h1 className="checkout-total">Basket Empty</h1>
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
						Total: ${(current.price * current.clicks).toFixed(2)}
					</h1>
				</div>
			) : (
				<React.Fragment></React.Fragment>
			);
		});
	}

	return (
		<div className="component-container checkout">
			<h1 className="component-header">Checkout</h1>
			<Basket />
			<Total />
		</div>
	);
};
