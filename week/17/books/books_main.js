class Book extends HTMLElement {
	constructor() {
		super();
	}

	set book(book) {
		this.innerHTML = `
        <div class="book">
				<img
					src="${book.source}"
					alt="book image"
					class="book-img"
				/>
				<h1 class="book-title">${book.title}</h1>
				<div class="book-author">
					<span class="book-author-by">by</span>
					<a href="#" class="book-author-name">${book.author}</a>
				</div>
				<a href="#" class="book-genre">${book.genre}</a>
				<p class="book-description">
				${book.description}
				</p>
				<a href="#" class="book-price">${book.price}</a>
			</div>
        `;
	}
}

customElements.define("new-book", Book);
