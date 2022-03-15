const UserContext = React.createContext(null);

function App() {
	const [products, setProducts] = React.useState({
		items: [
			{
				item: "Apple",
				inventory: 5,
				src: "./img/apple.png",
				clicks: 0,
			},
			{
				item: "Orange",
				inventory: 5,
				src: "./img/apple.png",
				clicks: 0,
			},
			{
				item: "Pear",
				inventory: 5,
				src: "./img/apple.png",
				clicks: 0,
			},
			{
				item: "Banana",
				inventory: 5,
				src: "./img/apple.png",
				clicks: 0,
			},
		],
	});
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
