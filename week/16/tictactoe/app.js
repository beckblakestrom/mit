const Board = () => {
	const [player, Setplayer] = React.useState(-1);
	let status = `Player ${player}`;

	return (
		<React.Fragment>
			<div
				onClick={(e) => {
					Setplayer(player + 1);
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
