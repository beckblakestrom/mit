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

	const removeTask = (e) => {
		const index = Number(e.target.id);
		let temp = [...tasks];
		temp.splice(index, 1);
		setTasks(temp);
	};

	const removeAll = (e) => {
		let temp = [];
		setTasks(temp);
	};
	return (
		<React.Fragment>
			<header className="header">
				<h1 className="logo">My To-Do List</h1>
				{/* <menuButton /> */}
			</header>
			<main className="main">
				<div className="all">
					<i onClick={removeAll} class="bi bi-check2-all clear"></i>
				</div>
				{tasks.map((task, i) => (
					<div id={i} className="task" key={i}>
						{task.text}
						<i onClick={removeTask} class="bi bi-check2-square complete"></i>
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
						<i class="add bi bi-journal-plus"></i>
					</button>
				</form>
			</footer>
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
