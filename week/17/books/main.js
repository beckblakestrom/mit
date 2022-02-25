import "./books_main.js";

window.addEventListener("load", () => {
	createBookList();
});

async function createBookList() {
	const response = await fetch("./books.json");
	const json = await response.json();
	const books = document.getElementById("books");

	json.books.forEach((book) => {
		const element = document.createElement("new-book");
		element.book = book;
		books.appendChild(element);
	});
}
