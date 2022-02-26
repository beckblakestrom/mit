function App() {
	const [data, setData] = React.useState(null);
	const [loaded, setLoaded] = React.useState(false);

	React.useEffect(() => {
		async function getData() {
			const response = await fetch("./books.json");
			const json = await response.json();
			setData(json);
			setLoaded(true);
		}
		getData();
	}, []);
	console.log("loaded", loaded, "data:", data);

	return (
		<React.Fragment>
			{loaded && data.books.map((book, i) => <Book data={book} key={i}></Book>)}
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("my-container"));