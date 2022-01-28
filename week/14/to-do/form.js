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
				<i class="add bi bi-journal-plus"></i>
			</button>
		</form>
	);
}
