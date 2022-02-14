const Board = () => {
	const [player, Setplayer] = React.useState(0);
	let status = `Player ${player}`;

	return (
		<React.Fragment>
			<div
				onClick={(e) => {
					Setplayer(1 - player);
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
