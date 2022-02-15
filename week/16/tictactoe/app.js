const Square = ({ id, player }) => {
	const [color, setColor] = React.useState("white");
	const palette = ["red", "blue", "green"];
	const getColor = () => {
		return palette[Math.floor(Math.random() * 3)];
	};
	function squareChange(e) {
		let square = e.target;
		square.classList.toggle("square-change");
	}
	console.log(`rendered square ${id}`);
	return (
		<button
			onClick={(e) => {
				alert(`${id}`);
			}}
			className="square">
			{id}
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
	const myPlayers = ["One", "Two"];
	const [player, setPlayer] = React.useState(0);
	let status = `Player ${myPlayers[player]}`;
	function renderSquare(i) {
		return <Square id={i} player={player}></Square>;
	}

	function changeClass(e) {
		let bgg = e.target;
		bgg.classList.toggle("background-change");
	}

	return (
		<React.Fragment>
			<div
				// onClick={(e) => {
				// 	setPlayer(1 - player);
				// 	changeClass(e);
				// }}
				className="game-board">
				<div className="grid-row">
					{mounted && renderSquare(0)}
					{mounted && renderSquare(1)}
					{mounted && renderSquare(2)}
				</div>
				<div id="info">
					<button onClick={toggle}>Show/Hide Row</button>
					<button onClick={reRender}>Re-Render</button>
					<h1 className="player"> {status} </h1>
				</div>
			</div>
		</React.Fragment>
	);
};

ReactDOM.render(<Board />, document.getElementById("root"));
