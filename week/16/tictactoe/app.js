const Board = () => {
	const myPlayers = [1, 2];
	const [player, setPlayer] = React.useState(0);
	let status = `Player ${myPlayers[player]}`;

	function changeClass(e) {
		let bgg = e.target;
		bgg.classList.toggle("background-change");
	}

	return (
		<React.Fragment>
			<div
				onClick={(e) => {
					setPlayer(1 - player);
					changeClass(e);
				}}
				className="game-board">
				<div id="info">
					<h1> {status} </h1>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<Board />, document.getElementById("root"));
