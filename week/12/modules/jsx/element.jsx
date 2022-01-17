const name = "Blake";
const element = <h4> Whats Up {name} </h4>;

ReactDOM.render(element, document.getElementById("root"));

const Hello = (props) => {
	const title = props.title;
	return <h2> Yo diggity {title}</h2>;
};

ReactDOM.render(<Hello title="Frank" />, document.getElementById("base"));
