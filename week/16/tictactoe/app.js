const Square = ({ id, player, newState, changeClass }) => {
	const [color, setColor] = React.useState("white");
	const [status, setStatus] = React.useState(null);
	const xo = ["x", "o"];
	const palette = ["red", "blue", "green"];
	const getColor = () => {
		return palette[Math.floor(Math.random() * 3)];
	};
	const [mounted, setMounted] = React.useState(true);
	const toggle = () => {
		setMounted(!mounted);
	};
	React.useEffect(() => {
		console.log(`Render ${id}`);
		return () => {
			console.log(`Unmounting ${id}`);
		};
	});
	function squareChange(e) {
		if (player === 1) {
			let square = e.target;
			square.classList.toggle("square-blue");
		}
		if (player === 0) {
			let square = e.target;
			square.classList.toggle("square-red");
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
	const changeClass = (e) => {
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
		console.log(`player #${player}`);
		console.log(`adding state ${JSON.stringify(state)}`);
		return nextPlayer;
	};

	function renderSquare(i) {
		return (
			<Square
				id={i}
				player={player}
				changeClass={changeClass}
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
					{mounted && renderSquare(0)}
					{mounted && renderSquare(1)}
					{mounted && renderSquare(2)}
				</div>
				<div className="grid-row">
					{mounted && renderSquare(0)}
					{mounted && renderSquare(1)}
					{mounted && renderSquare(2)}
				</div>
				<div id="info">
					<h1 className="player"> {status} </h1>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<Board />, document.getElementById("root"));
