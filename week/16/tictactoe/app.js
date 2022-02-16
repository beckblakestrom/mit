const Square = ({ id, player, newState, changeBoard }) => {
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
		}
		if (player === 0) {
			let square = e.target;
			square.classList.add("square-red");
		}
	}
	return (
		<button
			onClick={(e) => {
				squareChange(e);
				let nextPlayer = newState({ id: id });
				setStatus(nextPlayer);
			}}
			className="square">
			{xo[status]}
		</button>
	);
};

const Board = () => {
	const [mounted, setMounted] = React.useState(true);
	const [random, setRandom] = React.useState(0);
	const reRender = () => {
		setRandom(Math.random());
	};
	const toggle = () => {
		setMounted(!mounted);
	};

	//
	const changeBoard = (e) => {
		let bgg = e.target.parentNode;
		let newBoard = bgg.parentNode;
		newBoard.classList.toggle("background-change");
	};
	//

	const [state, setState] = React.useState([]);
	const myPlayers = ["One", "Two"];
	const [player, setPlayer] = React.useState(0);
	let status = `Player ${myPlayers[player]}'s Turn`;

	const newState = (object) => {
		let nextPlayer = 1 - player;

		setPlayer(nextPlayer);

		setState([...state, object]);

		console.log(`${JSON.stringify(state)}`);
		return nextPlayer;
	};

	function renderSquare(i) {
		return (
			<Square
				id={i}
				player={player}
				changeBoard={changeBoard}
				newState={newState}></Square>
		);
	}

	return (
		<React.Fragment>
			<div onClick={(e) => {}} className="game-board">
				<div className="grid-row">
					{mounted && renderSquare(0)}
					{mounted && renderSquare(1)}
					{mounted && renderSquare(2)}
				</div>
				<div className="grid-row">
					{mounted && renderSquare(3)}
					{mounted && renderSquare(4)}
					{mounted && renderSquare(5)}
				</div>
				<div className="grid-row">
					{mounted && renderSquare(6)}
					{mounted && renderSquare(7)}
					{mounted && renderSquare(8)}
				</div>
				<div id="info">
					<h1 className="player"> {status} </h1>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<Board />, document.getElementById("root"));
