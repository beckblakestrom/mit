function App() {
	return (
		<React.Fragment>
			<div className="game-board">
				<div id="info">
					<h1> {status} </h1>
				</div>
			</div>
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
