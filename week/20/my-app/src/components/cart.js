import React from "react";
import { UserContext } from "./shopping";
import apple from "./img/apple.png";
import banana from "./img/banana.png";
import pear from "./img/pear.png";
import orange from "./img/orange.png";

const Cart = () => {
	const { products, setProducts } = React.useContext(UserContext);
	function Basket() {
		return products.items.map((current) => {
			let i = products.items.indexOf(current);
			let src;
			if (current.item === "apple") {
				src = apple;
			}
			if (current.item === "pear") {
				src = pear;
			}
			if (current.item === "banana") {
				src = banana;
			}
			if (current.item === "orange") {
				src = orange;
			}
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
					<button
						className="products-button products-button-remove"
						onClick={() => {
							let items = [...products.items];
							let item = { ...items[i] };
							item.inventory += 1;
							item.clicks -= 1;
							items[i] = item;
							setProducts({ items });
						}}>
						Remove from Basket
					</button>
				</div>
			) : (
				<React.Fragment></React.Fragment>
			);
		});
	}

	return (
		<div className="component-container cart">
			<h1 className="component-header">Basket</h1>
			<Basket />
		</div>
	);
};

export default Cart;
