menuButton.onclick = () => {
	menuBackground.classList.toggle("open-menu__background");
	menuBrowser.classList.toggle("open-menu__browser");
	menuButton.classList.toggle("open-menu__button");
	menuButtonText.classList.toggle("open-menu__button-text");
	menuButtonBackground.classList.toggle("open-menu__button-background");
};

// function openContainer(container) {
// 	let parent = document.getElementById(container).parentNode;
// 	console.log(parent);
// 	parent.classList.toggle("open-container");
// 	console.log(`${parent.className} height increased to 50%`);
// 	let opener = document.getElementById(container).nextElementSibling;
// 	opener.classList.toggle("open-link");
// }

menuBrowserWeek.onclick = () => {
	categoryGrid.classList.toggle("open");
	menuBrowserWeek.classList.toggle("width-100");
	weekArrow.classList.toggle("rotate-90");
	weekContainer.classList.toggle("height-30");
};
