const UserContext = React.createContext(null);

function App() {
	const [products, setProducts] = React.useState([
		{
			item: "Apple",
			inventory: 5,
		},
		{
			item: "Orange",
			inventory: 5,
		},
		{
			item: "Pear",
			inventory: 5,
		},
		{
			item: "Banana",
			inventory: 5,
		},
	]);
	return (
		<UserContext.Provider value={{ products, setProducts }}>
			<div className="page-container">
				<Products />
				<Cart />
				<Checkout />
			</div>
		</UserContext.Provider>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
