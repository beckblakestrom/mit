const UserContext = React.createContext(null);

function App() {
	const [products, setProducts] = React.useState({
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
				price: 2.5,
			},
			{
				item: "Banana",
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

ReactDOM.render(<App />, document.getElementById("root"));
