const numbers = [1, 2, 3, 4, 5];

const updatedNumbers = numbers.map((number, index) => {
	number = number * 2;
	return <li key={index.toString()}>{number}</li>;
});

ReactDOM.render(<ul>{updatedNumbers}</ul>, document.getElementById("root"));
