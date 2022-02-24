class book extends HTMLElement {
	constructor() {
		super();

		const title = this.getAttribute("title");
		const author = this.getAttribute("author");
		const publisher = this.getAttribute("publisher");
		const description = this.getAttribute("description");
	}
}
