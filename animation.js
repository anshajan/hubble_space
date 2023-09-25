const animeTitle = (element) => {
	const arrayText = element.innerHTML.split("");
	element.innerHTML = "welcome";
	arrayText.forEach((letter, indice) => {
		
	});

};

const h1 = document.querySelector(".welcome");

animeTitle(h1);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		entry.isIntersecting
			? entry.target.classList.add("active")
			: entry.target.classList.remove("active");
	});
});

const hiddenElements = document.querySelectorAll(".reveal");

hiddenElements.forEach((el) => observer.observe(el));