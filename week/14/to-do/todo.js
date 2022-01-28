function Todo({ task, index, remove }) {
	function handle() {
		remove(index);
	}

	return (
		<div className="task">
			{task.text}
			<i onClick={handle} class="bi bi-check2-square complete"></i>
		</div>
	);
}
