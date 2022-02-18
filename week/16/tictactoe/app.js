const Square = ({ id, player, newState, changeBoard, resetBoard }) => {
	const [status, setStatus] = React.useState(null);
	const xo = ["o", "x"];

	const [mounted, setMounted] = React.useState(true);
	const toggle = () => {
		setMounted(!mounted);
	};

	function squareChange(e) {
		if (player === 1) {
			let square = e.target;
			square.classList.add("square-blue");
			console.log(`status ${status}`);
		}
		if (player === 0) {
			let square = e.target;
			square.classList.add("square-red");
			console.log(`status ${status}`);
		}
	}
	return (
		<button
			onClick={(e) => {
				squareChange(e);
				let nextPlayer = newState(id);
				setStatus(nextPlayer);
				console.log("hello");
			}}
			className="square">
			{xo[status]}
		</button>
	);
};

const Board = () => {
	//
	const changeBoard = (e) => {
		let bgg = e.target.parentNode;
		let newBoard = bgg.parentNode;
		newBoard.classList.toggle("background-change");
	};
	//

	const [state, setState] = React.useState(Array(9).fill(null));
	const myPlayers = ["One", "Two"];
	const [player, setPlayer] = React.useState(0);

	let status = `Player ${myPlayers[player]}'s Turn`;
	let winner = checkWinner(state);
	if (winner != null) status = `Player ${winner} wins`;

	const newState = (idOfSquare) => {
		let thePlayer = player;
		state[idOfSquare] = player;
		setState(state);
		let nextPlayer = 1 - player;
		setPlayer(nextPlayer);
		console.log(`${JSON.stringify(state)}`);
		return thePlayer;
	};

	function renderSquare(i) {
		return (
			<Square
				id={i}
				player={player}
				changeBoard={changeBoard}
				resetBoard={resetBoard}
				newState={newState}></Square>
		);
	}

	function resetBoard() {
		console.log("reset");
	}

	return (
		<React.Fragment>
			<div onClick={(e) => {}} className="game-board">
				<div className="grid-row">
					{renderSquare(0)}
					{renderSquare(1)}
					{renderSquare(2)}
				</div>
				<div className="grid-row">
					{renderSquare(3)}
					{renderSquare(4)}
					{renderSquare(5)}
				</div>
				<div className="grid-row">
					{renderSquare(6)}
					{renderSquare(7)}
					{renderSquare(8)}
				</div>
				<div id="info">
					<h1 className="player"> {status} </h1>
					<button onClick={resetBoard}>Reset Board</button>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<Board />, document.getElementById("root"));
