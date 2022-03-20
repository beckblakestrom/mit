import React from "react";
import { UserContext } from "./shopping";
import apple from "./img/apple.png";
import banana from "./img/banana.png";
import pear from "./img/pear.png";
import orange from "./img/orange.png";

const Products = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Listing() {
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

			let stock = current.inventory;
			let out = false;
			if (stock === 0) {
				out = true;
			}

			return (
				<div key={current.item} className="products-container">
					<img className="products-img" src={src} alt={current.item} />
					<div className="products-column">
						<h1 className="products-item">{current.item}</h1>
						<h1 className="products-price">
							Price: ${current.price.toFixed(2)}
						</h1>
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

export default Products;
