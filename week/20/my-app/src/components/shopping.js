import React from "react";
import Restock from "./restock";
import Cart from "./cart";
import Checkout from "./checkout";
import Products from "./products";
import axios from "axios";

export const UserContext = React.createContext(null);

function Shopping() {
	const [products, setProducts] = React.useState({
		items: [
			{
				item: "apple",
				inventory: 5,

				clicks: 0,
				price: 2,
			},
			{
				item: "orange",
				inventory: 5,

				clicks: 0,
				price: 3,
			},
			{
				item: "pear",
				inventory: 5,

				clicks: 0,
				price: 1.5,
			},
			{
				item: "banana",
				inventory: 5,

				clicks: 0,
				price: 2,
			},
		],
	});
	return (
		<UserContext.Provider value={{ products, setProducts }}>
			<div className="page-container">
				<Products />
				<Cart />
				<Checkout />
				<Restock />
			</div>
		</UserContext.Provider>
	);
}
export default Shopping;
