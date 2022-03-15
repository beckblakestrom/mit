const UserContext = React.createContext(null);

function App() {
	const [cart, setCart] = React.useState(null);
	const [products, setProducts] = React.useState({
		items: [
			{
				item: "Apple",
				inventory: 5,
				src: "./img/apple.png",
			},
			{
				item: "Orange",
				inventory: 5,
				src: "./img/apple.png",
			},
			{
				item: "Pear",
				inventory: 5,
				src: "./img/apple.png",
			},
			{
				item: "Banana",
				inventory: 5,
				src: "./img/apple.png",
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
