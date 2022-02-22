var tabs = document.querySelectorAll("nav a");
var logo = document.querySelector(".logo i");

// Playing a bit with Font Awesome
if (window.innerWidth < 600) {
  logo.classList.replace("fa-bullseye", "fa-cubes");
} else {
  logo.classList.replace("fa-cubes", "fa-bullseye");
}

tabs.forEach((tab) => tab.addEventListener("click", makeActive));

function makeActive(event) {
  makeInactive();
  event.target.classList.add("active");

  event.preventDefault();
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}
