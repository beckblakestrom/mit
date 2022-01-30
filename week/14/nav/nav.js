const numbers = [1, 2, 3, 4, 5];

const updatedNumbers = numbers.map((number) => {
	return <li>{number}</li>;
});

ReactDOM.render(<ul>{updatedNumbers}</ul>, document.getElementById("root"));
