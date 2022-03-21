import "./App.css";
import React from "react";

function TodoForm({ addTask }) {
	const [value, setValue] = React.useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTask(value);
		setValue("");
	};

	return (
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
				<i className="add bi bi-journal-plus"></i>
			</button>
		</form>
	);
}

function Todo({ task, index, remove }) {
	function handle() {
		remove(index);
	}

	return (
		<div className="task">
			{task.text}
			<i onClick={handle} className="bi bi-check2-square complete"></i>
		</div>
	);
}

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
			<div className="root">
				<header className="header">
					<h1 className="logo">My To-Do List</h1>
					{/* <menuButton /> */}
				</header>
				<main className="main">
					<div onClick={removeAll} className="all">
						<i className="bi bi-check2-all clear"></i>
						Clear All
					</div>
					{tasks.map((task, i) => (
						<Todo index={i} task={task} remove={removeTask} />
					))}
				</main>
				<footer className="footer">
					<TodoForm addTask={addTask}></TodoForm>
				</footer>
			</div>
		</React.Fragment>
	);
}

export default App;
