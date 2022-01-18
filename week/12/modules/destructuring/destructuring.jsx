const App = () => {
	const handler = () => alert(`Yoda Bruh`);
	return <MyButton onClick={handler}></MyButton>;
};

// const MyButton = (props) => {
// 	return <button onClick={props.onClick}>Star Wars?</button>;
// };

// const MyButton = ({ onClick }) => {
// 	return <button onClick={onClick}>Star Wars?</button>;
// };

const MyButton = ({ onClick }) => {
	let { Button } = ReactBootstrap;
	return <Button onClick={onClick}>Star Wars?</Button>;
};

const FruitStand = () => {
	let product = { name: "pear", cost: 2, inStock: 7 };
	let { name, inStock } = product;
	let item = { name, inStock };

	const handler = () => alert(`name: ${item.name} instock: ${item.inStock}`);
	return <button onClick={handler}>Fruit?</button>;
};

ReactDOM.render(<App />, document.getElementById("container"));
ReactDOM.render(<FruitStand />, document.getElementById("fruit__container"));
