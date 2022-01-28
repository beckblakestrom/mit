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

	const addTask = (text) => {
		const newTasks = [...tasks, { text: text, isCompleted: false }];
		setTasks(newTasks);
	};

	const removeTask = (index) => {
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
				<div onClick={removeAll} className="all">
					<i class="bi bi-check2-all clear"></i>
					Clear All
				</div>
				{tasks.map((task, i) => (
					<Todo index={i} task={task} remove={removeTask} />
				))}
			</main>
			<footer className="footer">
				<TodoForm addTask={addTask}></TodoForm>
			</footer>
		</React.Fragment>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
