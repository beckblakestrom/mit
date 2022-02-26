function Book({ data }) {
	return (
		<div className="book">
			<img src={data.source} alt="book image" className="book-img" />
			<h1 className="book-title">{data.title}</h1>
			<div className="book-author">
				<span className="book-author-by">by</span>
				<a href="#" className="book-author-name">
					{data.author}
				</a>
			</div>
			<a href="#" className="book-genre">
				{data.genre}
			</a>
			<p className="book-description">{data.description}</p>
			<a href="#" className="book-price">
				{data.price}
			</a>
		</div>
	);
}

customElements.define("new-book", Book);
