const Square = ({ id }) => {
	return <button className="square">{id}</button>;
};

const Board = () => {
	const myPlayers = ["One", "Two"];
	const [player, setPlayer] = React.useState(0);
	let status = `Player ${myPlayers[player]}`;
	function renderSquare(i) {
		return <Square id={i}></Square>;
	}

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
				<div className="grid-row">
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div id="info">
					<h1 className="player"> {status} </h1>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<Board />, document.getElementById("root"));
