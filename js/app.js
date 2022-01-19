menuButton.onclick = () => {
	let menu = document.getElementById("menu");
	menuBrowser.classList.toggle("open-menu__browser");
	menuButton.classList.toggle("open-menu__button");
	menuButtonText.classList.toggle("open-menu__button-text");
	menuButtonBackground.classList.toggle("open-menu__button-background");
};
