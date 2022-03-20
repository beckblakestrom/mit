import React from "react";
import { UserContext } from "./shopping";
import apple from "./img/apple.png";
import banana from "./img/banana.png";
import pear from "./img/pear.png";
import orange from "./img/orange.png";
function fetch() {
	var requestOptions = {
		method: "GET",
		redirect: "follow",
	};

	fetch("http://localhost:1337/api/products", requestOptions)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			console.log("name:", data.data[0].attributes.name);
			console.log("inventory:", data.data[0].attributes.inventory);
			console.log("clicks:", data.data[0].attributes.clicks);
			console.log("price:", data.data[0].attributes.price);
		})
		.catch((error) => console.log("error", error));
}
const Restock = () => {
	const { products, setProducts } = React.useContext(UserContext);

	function Deliver() {
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
					<img className="products-img" src={src} />
					<div className="products-column">
						<h1 className="products-item">{current.item}</h1>
						<h1 className="products-inventory">
							Inventory: {current.inventory}
						</h1>
					</div>

					<button
						className="products-button"
						onClick={() => {
							let items = [...products.items];
							let item = { ...items[i] };
							item.inventory += 5;
							items[i] = item;
							setProducts({ items });
						}}>
						Restock
					</button>
				</div>
			);
		});
	}

	return (
		<div className="component-container restock">
			<h1 className="component-header">Warehouse</h1>
			<Deliver />
		</div>
	);
};

export default Restock;
