function App() {
	const [tasks, setTasks] = React.useState([
		{
			text: "learn React",
			isComplete: false,
		},
		{
			text: "do laundry",
			isComplete: false,
		},
		{
			text: "train",
			isComplete: false,
		},
	]);

	const [value, setValue] = React.useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		const newTasks = [...tasks, { text: value, isCompleted: false }];
		setTasks(newTasks);
		setValue("");
	};
	return (
		<React.Fragment>
			<header className="header">
				<h1 className="logo">My To-Do List</h1>
				{/* <menuButton /> */}
			</header>
			<main className="main">
				{tasks.map((task, i) => (
					<div className="task" key={i}>
						{task.text}
					</div>
				))}
			</main>
			<footer className="footer">
				<form onSubmit={handleSubmit} className="form">
					<input
						value={value}
						type="text"
						className="input"
						placeholder="I need to..."
						onChange={(e) => setValue(e.target.value)}
					/>
					<button className="button" type="submit">
						Add Task
						<i class="add bi bi-plus"></i>
					</button>
				</form>
			</footer>
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
