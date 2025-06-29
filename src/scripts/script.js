const page = document.querySelector("html"),
	hamburguerMenu = document.getElementById("hamburguer-menu"),
	nav = document.querySelector("nav"),
	links = nav.querySelectorAll("a"),
	overlay = document.querySelector(".overlay");

hamburguerMenu.addEventListener("click", toggleNav);
overlay.addEventListener("click", toggleNav);

links.forEach((link) => {
	link.addEventListener("click", () => {
		if (window.innerWidth <= 480) toggleNav();
	});
});

function toggleNav() {
	nav.classList.toggle("off");
	overlay.classList.toggle("showOverlay");
	page.classList.toggle("block-scroll");

	// Update ARIA attributes for accessibility
	updateARIA();
}

function updateARIA() {
	overlay.setAttribute(
		"aria-hidden",
		overlay.classList.contains("showOverlay") ? "false" : "true"
	);
	overlay.setAttribute(
		"aria-label",
		overlay.classList.contains("showOverlay") ? "Close Menu" : "Open Menu"
	);
	hamburguerMenu.setAttribute(
		"aria-expanded",
		nav.classList.contains("off") ? "false" : "true"
	);
	hamburguerMenu.setAttribute(
		"aria-label",
		nav.classList.contains("off") ? "Open Menu" : "Close Menu"
	);
}
